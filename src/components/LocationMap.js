import React from 'react'
import ReactMapGL , {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { Room } from '@material-ui/icons';

function LocationMap({latitude, longitude}) {
    const [coords, setCoords] = React.useState({
        height: 200,
        width: "100vw",
        longitude: parseFloat(longitude), 
        latitude: parseFloat(latitude),
        zoom: 14
      })
    const marker = new mapboxgl.LngLat(longitude, latitude)

    return (
        <div>
            <ReactMapGL
                {...coords}
                mapboxApiAccessToken='pk.eyJ1IjoieWFhY29ibWFydGluZXoiLCJhIjoiY2tjNDlqYTB1MDVyajMzcmlvMjMxdW01OCJ9.6S3KsotDYdk70Y9zmxw28w'
                mapStyle='mapbox://styles/mapbox/streets-v9'
                onViewportChange={setCoords}
            >
                <Marker latitude={marker.lat} longitude={marker.lng}>
                    <Room fontSize='large' color='secondary' />
                </Marker>
            </ReactMapGL>
        </div>
    )
}

export default LocationMap
