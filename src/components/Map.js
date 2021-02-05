import React from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import BottomNavBar from './BottomNavBar';
import { ArrowForward,  Close, Room, Search } from '@material-ui/icons';
import { IconButton, InputBase, List, ListItem, ListItemText, makeStyles, Paper, Slide, Typography } from '@material-ui/core'
import Lottie from 'lottie-react'
import animationData from '../46997-color-preloader.json'
import DeckGL, { PathLayer } from 'deck.gl'

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
    // const geolocateControlStyle= {
    //     right: 10,
    //     bottom: 90,
    //     position: 'absolute',
    //     width: 29,
    //     borderRadius: 20
    //   };
    const [coords, setCoords] = React.useState({
        height: "100vh",
        width: "100vw",
        longitude: 120.8160, 
        latitude: 14.8527,
        zoom: 13
      })
      const [locations, setLocations] = React.useState(null)
      const [markers, setMarkers] = React.useState(null)
      const [selectedLocation, setSelectedLocation] = React.useState(null)
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
      const data = [{
        name: "random-name",
        color: [101, 147, 245],
        path:[
            [
              120.817672,
              14.854427
            ],
            [
              120.817354,
              14.854399
            ],
            [
              120.817056,
              14.854434
            ],
            [
              120.816739,
              14.85461
            ]
          ]
        }
       ]
       const layer = [
        new PathLayer({
         id: "path-layer",
         data,
         getWidth: data => 1,
         getColor: data => data.color,
         widthMinPixels: 3
       })
      ]
    return (
    <div>
        <DeckGL
            initialViewState={{
                longitude: coords.longitude,
                latitude: coords.latitude, 
                zoom: coords.zoom
            }}
            height={coords.height}
            width={coords.width}
            controller={true}
            layers={layer}
        >

            <ReactMapGL
            // {...coords}
            mapboxApiAccessToken='pk.eyJ1IjoieWFhY29ibWFydGluZXoiLCJhIjoiY2tjNDlqYTB1MDVyajMzcmlvMjMxdW01OCJ9.6S3KsotDYdk70Y9zmxw28w'
            mapStyle='mapbox://styles/mapbox/streets-v9'
            onViewportChange={setCoords}>
                {markers?.map((location, index) => (
                    <LocationMarker key={index} location={location} handleClick={()=> setSelectedLocation(location)}/>
                    ))}
            </ReactMapGL>
            {/* <GeolocateControl
                style={geolocateControlStyle}
                positionOptions={{enableHighAccuracy: true}}
                trackUserLocation={true}
                fitBoundsOptions={{maxZoom: 13}}
                auto
            /> */}
        <SearchPanel callback={handleSearch} onChange={handleCoordinateChange}/>
        </DeckGL>
        {selectedLocation && (
            <SelectedLocation location={selectedLocation} onClose={() => setSelectedLocation(null)}/>
        )}
        <BottomNavBar />
    </div>
    );
}

export default Map

const LocationMarker = ({location, handleClick}) => {

    const latlng = new mapboxgl.LngLat(location.longitude, location.latitude)
    return (
        <Marker 
            latitude={latlng.lat}
            longitude={latlng.lng}
            style={{zIndex: 0}}
        >
            <Room fontSize="small" color='secondary' onClick={handleClick} />
        </Marker>
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

const SelectedLocation = ({location, onClose}) => {
    console.log(location)
    const classes = useStyles()
    return (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <Paper className={classes.selected} >
                <div className={classes.selectedPanel}>
                    <div>
                        <Typography className={classes.selected_name}>{location.name}</Typography>
                        <Typography variant='caption' color='textSecondary'>{location.address}</Typography>
                    </div>
                    <IconButton size='small' color='inherit'>
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