import { LatLngExpression } from 'leaflet'
import { ReactElement, useEffect } from 'react'
import { MapContainer, Polyline, TileLayer } from 'react-leaflet'
import { useSelector } from 'react-redux'
import { RootState } from '../state/store'
import { IISSData } from '../state/types'
import { last } from '../utils'
import ISSMarker from './ISSMarker'

export default function Map(): ReactElement {
  const polyLine = useSelector((state: RootState) => state.polyLine);
  const {live, data: currentData} = useSelector((state: RootState) => state.timeControl);
  const { loading, data, error } = useSelector((state: RootState) => state.iss);
  const issData = live ? last(data) : currentData;

  useEffect(() => {
    console.log(JSON.stringify(issData))
  }, [issData])

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
      ) :
        <>
          <ISSMarker data={issData} />
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
