import React from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import BottomNavBar from './BottomNavBar';
import { Room } from '@material-ui/icons';

const Map = () => {
    const [coords, setCoords] = React.useState({
        height: "100vh",
        width: "100vw",
        longitude: 120.8160, 
        latitude: 14.8527,
        zoom: 15
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
            offsetTop={-48}
            offsetLeft={-24}
            latitude={latlng.lat}
            longitude={latlng.lng}
        >
            <Room fontSize="small" color="secondary"/>
            {/* <img src={`./logo_final.png`} alt='marker' style={{width: 20}}/> */}
        </Marker>
    )
}