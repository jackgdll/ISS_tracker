import { LatLngExpression } from "leaflet";
import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import { useSelector } from "react-redux";
import "./App.css";
import { issIcon } from "./Icon";
import { fetchISSRequest } from "./state/actionCreators";
import { useAppDispatch } from "./state/hooks";
import { RootState } from "./state/reducers";
import { pythag, formatTimestamp } from "./utils";

const TEN_SECONDS_MS = 10000;
const DISTANCE_LIMIT = 100;

function App() {
  const dispatch = useAppDispatch();
  const { loading, data, error } = useSelector((state: RootState) => state.iss);
  const [history, setHistory] = useState<number[][][]>([[]]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchISSRequest());
    }, TEN_SECONDS_MS);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (data) {
      const lastLine = history[history.length - 1];
      const lastPoint = lastLine[lastLine.length - 1];
      const isNewLine =
        lastPoint && lastPoint.length === 2
          ? pythag(
              lastPoint[0],
              data.iss_position.latitude,
              lastPoint[1],
              data.iss_position.longitude
            ) > DISTANCE_LIMIT
          : false;
      let newHistory = history;

      if (isNewLine) {
        newHistory.push([
          [data.iss_position.latitude, data.iss_position.longitude],
        ]);
      } else {
        newHistory[history.length - 1].push([
          data.iss_position.latitude,
          data.iss_position.longitude,
        ]);
      }
      setHistory(newHistory);
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
            <>
              <Marker
                position={[
                  data.iss_position.latitude,
                  data.iss_position.longitude,
                ]}
                icon={issIcon}
              >
                <Popup>
                  ISS: <br />
                  Position: <br />· latitude: {data.iss_position.latitude}{" "}
                  <br />· longitude: {data.iss_position.longitude}
                  <br />
                  Time: {formatTimestamp(data.timestamp)}
                </Popup>
              </Marker>
              <Polyline
                positions={history as LatLngExpression[][]}
                pathOptions={{ color: "lime" }}
              />
            </>
          )}
        </MapContainer>
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
}

export default App;
