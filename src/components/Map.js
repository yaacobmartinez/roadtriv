import React from 'react'
import { StaticMap, } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
// import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import BottomNavBar from './BottomNavBar';
import { ArrowForward,  Close, Search } from '@material-ui/icons';
import { IconButton, InputBase, List, ListItem, ListItemText, makeStyles, Paper, Slide, Typography } from '@material-ui/core'
import Lottie from 'lottie-react'
import animationData from '../46997-color-preloader.json'
import DeckGL, { IconLayer, TripsLayer } from 'deck.gl'

const ICON_MAPPING = {
    marker: {x: 0, y: 0, width: 128, height: 128, mask: true}
  };

const useStyles = makeStyles((theme)=>({
    loader: {
        height: '100vh', backgroundColor: theme.mint
    }, 
    search_root: {
        padding: '1px 2px',
        display: 'flex',
        alignItems: 'center',
        width: '90vw',
        margin: '10px auto',
        zIndex: theme.zIndex.appBar + 1

    },
    search_input:{
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    selected: {
        width: '90vw',
        maxHeight: 100, 
        position: 'absolute', 
        bottom: 76,
        marginLeft: '5vw',
        marginBottom: 10
    },
    selectedPanel: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-around'
    },
    selected_name: {
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: 1
    }
}))

const Map = () => {
    const classes = useStyles()
    const initialCoords= {
        height: "100vh",
        width: "100vw",
        longitude: 120.8160, 
        latitude: 14.8527,
        zoom: 16
      };
    const [coords, setCoords] = React.useState(initialCoords)
    const [locations, setLocations] = React.useState(null)
    const [markers, setMarkers] = React.useState(null)
    const [selectedLocation, setSelectedLocation] = React.useState(null)
    const [navigationPath, setNavigationPath] = React.useState(null)
    const [hasSearch, setHasSearch] = React.useState(true)
    const [currentBearing, setCurrentBearing] = React.useState(0)
    const [route, setRoute] = React.useState(null)
    const getLocations = React.useCallback(async () => {
    const res = await axios.get(`/locations`)
        if(!res.data.success) return
        setLocations(res.data.locations)
        setMarkers(res.data.locations)
    },[])
    
      React.useEffect(() => {
        let cancelled = false
        if (!cancelled) getLocations()
        return () => cancelled = true
      },[getLocations])
      
      const navigate = async (location) => {
            navigator.geolocation.getCurrentPosition( async function(position) {
                // console.log(position.coords)
                // console.log(location)
                setCoords({...coords, latitude: position.coords.latitude, longitude: position.coords.longitude })
                const res = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${position.coords.longitude},${position.coords.latitude};${location.longitude},${location.latitude}?geometries=geojson&steps=true&access_token=pk.eyJ1IjoieWFhY29ibWFydGluZXoiLCJhIjoiY2tjNDlqYTB1MDVyajMzcmlvMjMxdW01OCJ9.6S3KsotDYdk70Y9zmxw28w`)
                // console.log(res.data)
                setRoute(res.data.routes[0])
                setCurrentBearing(res.data.routes[0].legs[0].steps[0].intersections[0].bearings[0])
                setNavigationPath([res.data.routes[0].geometry])
            });
      }
      
      const filterByValue = (array, string) => {
        return array.filter(o => {     	
          return Object.keys(o).some(k => {       	
            if(typeof o[k] === 'string') {
                return o[k].toLowerCase().includes(string.toLowerCase())
            }else{
                return null
            }   
          });      
        });
      } 

      const handleSearch = (key) => {
          return filterByValue(locations, key)
      } 
      const handleCoordinateChange = (latitude, longitude, zoom, location) =>{
        setMarkers(locations.filter((loc) => loc._id === location._id))
        setCoords({...coords, latitude, longitude, zoom})
        setSelectedLocation(location)
      }
      if (!markers) return <Lottie animationData={animationData} className={classes.loader} />
       const layer = new TripsLayer({
            id: "trips-layer",
            data: navigationPath,
            // data,
            getPath: d => d.coordinates.map(p => p),
            getColor: [15, 89, 225],
            opacity: 0.1,
            widthMinPixels: 6,
            rounded: true,
       })
      
      const mkrs = new IconLayer({
        id: 'icon-layer',
        data: locations,
        pickable: true,
        // iconAtlas and iconMapping are required
        // getIcon: return a string
        iconAtlas: './icons/01d@2x.png',
        iconMapping: ICON_MAPPING,
        getIcon: d => 'marker',
        onClick: ({object}) => {setSelectedLocation(object); setHasSearch(false)},
        sizeScale: 8,
        getPosition: d => [parseFloat(d.longitude), parseFloat(d.latitude)],
        getSize: d => 5,
        getColor: [4214, 140, 0]
      });
    return (
    <div>
        <DeckGL
            layers={[layer, mkrs]}
            initialViewState={{
                longitude: coords.longitude,
                latitude: coords.latitude, 
                zoom: coords.zoom,
                bearing: currentBearing, 
                pitch: navigationPath ? 60 : 0
            }}
            height={coords.height}
            width={coords.width}
            controller={true}
        >
        {/* {route && (
            <Marker latitude={coords.latitude} longitude={coords.longitude}>
                <img src={`./navigation.png`} alt='nav' style={{width: 30, height: 30}} />
            </Marker>
        )} */}
            <StaticMap
                reuseMaps 
                mapboxApiAccessToken='pk.eyJ1IjoieWFhY29ibWFydGluZXoiLCJhIjoiY2tjNDlqYTB1MDVyajMzcmlvMjMxdW01OCJ9.6S3KsotDYdk70Y9zmxw28w'
                mapStyle='mapbox://styles/mapbox/streets-v9' />
        { hasSearch && <SearchPanel callback={handleSearch} onChange={handleCoordinateChange}/> }
        { !hasSearch && route && <RouteInfo route={route}/> }
        <BottomNavBar />
        </DeckGL>
        {selectedLocation && (
            <SelectedLocation location={selectedLocation} navigate={navigate} onClose={() => {setSelectedLocation(null); setMarkers(locations); setHasSearch(true); setNavigationPath(null); setCoords(initialCoords)}}/>
        )}
    </div>
    );
}

export default Map

const RouteInfo = ({route}) => {
    // const classes = useStyles()
    const getDistance = distance => {
        let unit = 'm'
        if (distance > 1000) {
            unit = 'km'
            distance /= 1000
        }
        return parseFloat(distance).toFixed(2) + ` ${unit}`
    }
    const getDuration = duration => {
        let unit = 'min'
        let time = 0
        if (duration > 3600) {
            time = Math.floor(duration / 60 / 60)
            unit = 'hr/s'
            return time + ` ${unit}`
        }
        time = Math.floor(duration / 60)
        return time + ` ${unit}`
    }
    return(
        <Paper style={{height: 100, width:'94vw', margin: '1vh 3vw'}}>
            <div style={{padding: 10}}>
                <Typography variant='h6'>By Driving</Typography>
                <Typography variant='subtitle2'>Distance: {getDistance(route.distance)}</Typography>
                <Typography variant='subtitle2'>Duration: {getDuration(route.duration)} (estimated)</Typography>
            </div>
        </Paper>
    )

}
const SearchPanel = ({callback, onChange}) => {
    const classes = useStyles()
    const [key, setKey] = React.useState('');
    const [results, setResults] = React.useState(null)
    const handleChange = (e) => {
        setKey(e.target.value)
        setResults(null)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const search_results = callback(key)
        setResults(search_results)
    }
    const handleClick = (location) => {
        const latitude = parseFloat(location.latitude)
        const longitude = parseFloat(location.longitude)
        const zoom = 16
        onChange(latitude, longitude, zoom, location)
        setResults(null)
    }
    return(
        <React.Fragment>
            <Paper component='form' className={classes.search_root} onSubmit={handleSubmit}>
                <IconButton className={classes.iconButton} aria-label="menu">
                    <Search />
                </IconButton>
                <InputBase
                    className={classes.search_input}
                    placeholder="Search for a Place"
                    value={key}
                    onChange={handleChange}
                    />
            </Paper>
            {
                results && (
                    <List component={Paper} dense style={{maxHeight: 350, width: '90vw', overflowY: 'scroll', margin: '-10px auto'}}>
                    {results?.map((result, index) => (
                        <ListItem key={index} button onClick={() => handleClick(result)}>
                            <ListItemText primary={result.name} secondary={result.address} />
                        </ListItem>
                    ))}
                    </List>
                )
            }
        </React.Fragment>
    )
}

const SelectedLocation = ({location, onClose, navigate}) => {
    const classes = useStyles()
    return (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <Paper className={classes.selected} >
                <div className={classes.selectedPanel}>
                    <div>
                        <Typography className={classes.selected_name}>{location.name}</Typography>
                        <Typography variant='caption' color='textSecondary'>{location.address}</Typography>
                    </div>
                    <IconButton size='small' color='inherit' onClick={() => navigate(location)}>
                        <ArrowForward />
                    </IconButton>
                </div>
                <IconButton size='small' onClick={onClose} style={{position: 'absolute', right: -10, top: -10, backgroundColor: '#0C1821'}}>
                    <Close style={{fontSize: 15, color: '#fff'}}/>
                </IconButton>
            </Paper>
        </Slide>
    )
}