import React from "react"
import "./map.scss"
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "react-leaflet"
import "leaflet/dist/leaflet.css"
import customIcon from "../../elements/MapIcon/MapIcon";

class Map extends React.Component
{
    render() {
        return <div className="map">
            <MapContainer center={[52.018, 19.137]} zoom={6} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={customIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    }
}

export default Map
