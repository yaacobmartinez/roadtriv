import React from 'react'
import ReactMapGL, {Marker, GeolocateControl} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import BottomNavBar from './BottomNavBar';
import { Room, Search } from '@material-ui/icons';
import { IconButton, InputBase, makeStyles, Paper } from '@material-ui/core'
import Lottie from 'lottie-react'
import animationData from '../46997-color-preloader.json'

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
    }
}))
const Map = () => {
    const classes = useStyles()
    const geolocateControlStyle= {
        right: 10,
        bottom: 90,
        position: 'absolute',
        width: 29,
        borderRadius: 20
      };
    const [coords, setCoords] = React.useState({
        height: "100vh",
        width: "100vw",
        longitude: 120.8160, 
        latitude: 14.8527,
        zoom: 13
      })
      const [locations, setLocations] = React.useState(null)
      const getLocations = React.useCallback(async () => {
        const res = await axios.get(`/locations`)
        if(!res.data.success) return
        setLocations(res.data.locations)
      },[])
    
      React.useEffect(() => {
        let cancelled = false
        if (!cancelled) getLocations()
        return () => cancelled = true
      },[getLocations])
      
      if (!locations) return <Lottie animationData={animationData} className={classes.loader} />
    return (
    <div>
        <ReactMapGL
        {...coords}
        mapboxApiAccessToken='pk.eyJ1IjoieWFhY29ibWFydGluZXoiLCJhIjoiY2tjNDlqYTB1MDVyajMzcmlvMjMxdW01OCJ9.6S3KsotDYdk70Y9zmxw28w'
        mapStyle='mapbox://styles/mapbox/streets-v9'
        onViewportChange={setCoords}>
            <SearchPanel />
            <GeolocateControl
                style={geolocateControlStyle}
                positionOptions={{enableHighAccuracy: true}}
                trackUserLocation={true}
                auto
            />
            {locations?.map((location, index) => (
            <LocationMarker key={index} location={location} />
            ))}
        <BottomNavBar />
        </ReactMapGL>
    </div>
    );
}

export default Map

const LocationMarker = ({location}) => {

    const latlng = new mapboxgl.LngLat(location.longitude, location.latitude)
    return (
        <Marker 
            latitude={latlng.lat}
            longitude={latlng.lng}
            style={{zIndex: 0}}
        >
            <Room fontSize="small" color='secondary' />
        </Marker>
    )
}

const SearchPanel = () => {
    const classes = useStyles()

    return(
        <Paper component='form' className={classes.search_root}>
            <IconButton className={classes.iconButton} aria-label="menu">
                <Search />
            </IconButton>
            <InputBase
                className={classes.search_input}
                placeholder="Search for a Place"
            />
        </Paper>
    )
}