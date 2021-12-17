import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";

function App() {
  return (
    <div>
      <MapContainer id="map" center={[0, 0]} zoom={2} scrollWheelZoom={false} maxBounds={[[-90, -180], [90, 180]]}>
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
  );
}

export default App;
