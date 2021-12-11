import React from "react"
import "./home-map.scss"
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import Paths from "../../Paths";

class HomeMap extends React.Component
{
    render() {
        return <div className="home-map">
            <div className="home-map__map-content">
                Testowy content
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
