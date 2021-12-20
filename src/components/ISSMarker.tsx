import React, { ReactElement } from "react";
import { Marker, Popup } from "react-leaflet";
import { issIcon } from "../Icon";
import { IISSData } from "../state/types";
import { formatTimestamp } from "../utils";

interface Props {
  data: IISSData | null;
}

export default function ISSMarker({ data }: Props): ReactElement {
  if (!data) {
    return <></>;
  }
  return (
    <Marker
      position={[data.iss_position.latitude, data.iss_position.longitude]}
      icon={issIcon}
    >
      <Popup>
        ISS: <br />
        Position: <br />· latitude: {data.iss_position.latitude} <br />·
        longitude: {data.iss_position.longitude}
        <br />
        Time: {formatTimestamp(data.timestamp)}
      </Popup>
    </Marker>
  );
}
