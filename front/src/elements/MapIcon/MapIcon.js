import gem from "./gem.png"
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl
const customIcon = new L.Icon({
    iconUrl: gem,
    shadowUrl: null,
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0, -25]
})

export default customIcon
