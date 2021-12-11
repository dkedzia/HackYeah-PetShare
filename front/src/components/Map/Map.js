import React from "react"
import "./map.scss"
import {MapContainer, TileLayer} from "react-leaflet";
import "react-leaflet"
import "leaflet/dist/leaflet.css"
import MapMarker from "../MapMarker/MapMarker";
import {defaultMapCoordinates, defaultMapZoom} from "../../Globals";

class Map extends React.Component
{
    render() {
        return <div className="map">
            <MapContainer center={defaultMapCoordinates} zoom={defaultMapZoom} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapMarker x="51.505" y="19.137" name="Opis"/>
            </MapContainer>
        </div>
    }
}

export default Map
