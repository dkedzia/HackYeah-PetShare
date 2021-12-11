import React from "react"
import customIcon from "../../elements/MapIcon/MapIcon";
import {Marker, Popup} from "react-leaflet";

class MapMarker extends React.Component
{
    render() {
        return <Marker position={[this.props.x, this.props.y]} icon={customIcon}>
            <Popup>
                {this.props.name}
            </Popup>
        </Marker>
    }
}

export default MapMarker
