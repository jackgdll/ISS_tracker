import { Marker, Popup } from "react-leaflet";
import React from "react";
import { latLngToKm } from "../utils";
import { Coords } from "../state/types";

interface Props {
  issCoords: Coords;
  meCoords: Coords;
}

export const MeMarker = ({ issCoords, meCoords }: Props) => (
  <Marker position={[meCoords.latitude || 0, meCoords.longitude || 0]}>
    <Popup>
      My Position: <br />
      · latitude: {meCoords.latitude.toFixed(4)} <br />
      · longitude: {meCoords.longitude.toFixed(4)} <br />
      <br />
      Distance from ISS: {latLngToKm(meCoords, issCoords).toFixed(1)} km
    </Popup>
  </Marker>
);
