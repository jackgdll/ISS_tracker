import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import "./App.css";
import { fetchISSRequest } from "./state/actionCreators";
import { useAppDispatch } from "./state/hooks";
import { RootState } from "./state/reducers";

const formatTimestamp = (timestamp: number): string =>
  Intl.DateTimeFormat("fr", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }).format(timestamp*1000);

const MINUTE_MS = 60000 / 6;

function App() {
  const dispatch = useAppDispatch();
  const { loading, data, error } = useSelector((state: RootState) => state.iss);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchISSRequest());
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(data?.timestamp);
    if (data) {
      console.log(formatTimestamp(data.timestamp));
    }
  }, [data]);

  return (
    <div>
      {data ? (
        <MapContainer
          id="map"
          center={[0, 0]}
          zoom={2}
          scrollWheelZoom={true}
          minZoom={2}
          maxBounds={[
            [-90, -180],
            [90, 180],
          ]}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {loading ? (
            <></>
          ) : (
            <Marker
              position={[
                data.iss_position.latitude,
                data.iss_position.longitude,
              ]}
            >
              <Popup>
                ISS: <br />
                Position: <br />
                · latitude: {data.iss_position.latitude} <br />
                · longitude:{" "}
                {data.iss_position.longitude}
                <br />
                Time: {formatTimestamp(data.timestamp)}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
}

export default App;
