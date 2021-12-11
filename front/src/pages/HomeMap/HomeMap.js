import React from "react"
import "./home-map.scss"
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import Paths from "../../Paths";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "react-leaflet"
import "leaflet/dist/leaflet.css"

class HomeMap extends React.Component
{
    render() {
        return <div className="home-map">
            <div className="home-map__map-content">
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <div className="home-map__actions">
                <Button content="Filtry"/>
                <Link to={Paths.addOffer}>
                    <Button content="Dodaj ogłoszenie"/>
                </Link>
            </div>
        </div>
    }
}

export default HomeMap
