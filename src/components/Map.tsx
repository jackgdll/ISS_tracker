import { LatLngExpression } from "leaflet";
import { ReactElement, useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import { useSelector } from "react-redux";
import useGeoLocation from "../hooks/useGeoLocation";
import { fetchISSRequest, appendToPolyLine } from "../state/actionCreators";
import { useAppDispatch } from "../state/hooks";
import { RootState } from "../state/store";
import { IISSData } from "../state/types";
import { last } from "../utils";
import ISSMarker from "./ISSMarker";
import { MeMarker } from "./MeMarker";

const THREE_SECONDS_MS = 3000;

export default function Map(): ReactElement {
  const dispatch = useAppDispatch();
  const polyLine = useSelector((state: RootState) => state.polyLine);
  const { live, data: currentData } = useSelector(
    (state: RootState) => state.timeControl
  );
  const { loading, data, error } = useSelector((state: RootState) => state.iss);
  const [issData, setIssData] = useState<IISSData | null>(null);
  const {
    loading: geoLocLoading,
    error: geoLocError,
    coords,
  } = useGeoLocation();

  useEffect(() => {
    if (!loading && !error) {
      setIssData(live ? last(data) : currentData);
    }
  }, [currentData, live, data, loading, error]);

  // Update ISS position every 3 seconds
  useEffect(() => {
    dispatch(fetchISSRequest());
    const interval = setInterval(() => {
      dispatch(fetchISSRequest());
    }, THREE_SECONDS_MS);

    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    if (data && !loading) {
      const position = last(data)?.iss_position;
      if (position) {
        dispatch(appendToPolyLine(position));
      }
    }
  }, [data, loading, dispatch]);

  const getLocation = () => {
    if (!navigator.geolocation) {
    }
  };

  return (
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
      {!issData ? (
        <></>
      ) : (
        <>
          <ISSMarker
            coords={issData.iss_position}
            timestamp={issData.timestamp}
          />
          {!geoLocLoading && !geoLocError && coords ? (
            <>
              <MeMarker issCoords={issData.iss_position} meCoords={coords} />
              <Polyline
                positions={[
                  [coords.latitude, coords.longitude],
                  [
                    issData.iss_position.latitude,
                    issData.iss_position.longitude,
                  ],
                ]}
                pathOptions={{weight: 1, dashArray: '10, 5'}}
              />
            </>
          ) : (
            <></>
          )}
        </>
      )}
      {polyLine.length !== 0 ? (
        <Polyline
          positions={polyLine as LatLngExpression[][]}
          pathOptions={{ color: "#008b8b", lineJoin: "round" }}
        />
      ) : (
        <></>
      )}
    </MapContainer>
  );
}
