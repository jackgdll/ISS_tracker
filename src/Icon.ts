import { Icon, Point } from "leaflet";

const issIcon = new Icon({
  iconUrl: require("./assets/iss.png"),
  iconRetinaUrl: require("./assets/iss.png"),
  iconSize: new Point(40, 40),
});

export { issIcon };
