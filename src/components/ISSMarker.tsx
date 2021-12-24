import { Marker, Popup } from "react-leaflet";
import { issIcon } from "../Icon";
import { Coords } from "../state/types";
import { formatTimestamp } from "../utils";

interface Props {
  coords: Coords;
  timestamp: number;
}

const ISSMarker = ({ coords, timestamp }: Props) => (
  <Marker position={[coords.latitude, coords.longitude]} icon={issIcon}>
    <Popup>
      ISS Position: <br />
      · latitude: {coords.latitude.toFixed(4)}<br />
      · longitude: {coords.longitude.toFixed(4)} <br />
      <br />
      Time: {formatTimestamp(timestamp)}
    </Popup>
  </Marker>
);

export default ISSMarker;
