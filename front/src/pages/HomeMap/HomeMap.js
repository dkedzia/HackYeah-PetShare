import React from "react"
import "./home-map.scss"
import Button from "../../components/Button/Button";

class HomeMap extends React.Component
{
    render() {
        return <div className="home-map">
            <div className="home-map__map-content">
                Testowy content
            </div>
            <div className="home-map__actions">
                <Button content="Przycisk 1"/>
            </div>
        </div>
    }
}

export default HomeMap
