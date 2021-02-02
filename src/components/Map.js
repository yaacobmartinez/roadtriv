import React from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import BottomNavBar from './BottomNavBar';
import { Room } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core'
import Lottie from 'lottie-react'
import animationData from '../46997-color-preloader.json'

const useStyles = makeStyles((theme)=>({
    loader: {
        height: '100vh', backgroundColor: theme.mint
    }
}))
const Map = () => {
    const classes = useStyles()
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
        console.table(res.data.locations)
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
        >
            <Room fontSize="small" color='secondary'/>
            {/* <img src={`./logo_final.png`} alt='marker' style={{width: 20}}/> */}
        </Marker>
    )
}