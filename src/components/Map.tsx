import { LatLngExpression } from 'leaflet'
import React, { ReactElement, useEffect } from 'react'
import { MapContainer, Polyline, TileLayer } from 'react-leaflet'
import { IISSData, PolyLineState } from '../state/types'
import ISSMarker from './ISSMarker'

interface Props {
  loading: boolean;
  data?: IISSData;
  polyLine: PolyLineState;
}

export default function Map({loading, data, polyLine}: Props): ReactElement {
  useEffect(() => {
    console.log('data: ' + JSON.stringify((data)));
    console.log('loading: ' + loading);
  }, [data, loading])
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
      {!data ? (
        <></>
      ) :
        <>
          <ISSMarker data={data} />
          {polyLine[0][0]?.length === 2 ?
          <Polyline
            positions={polyLine as LatLngExpression[][]}
            pathOptions={{ color: "lime" }}
          /> : <></>}
        </>
      }
    </MapContainer>
  )
}
