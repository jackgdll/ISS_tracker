import { Coords } from "./state/types";

export const formatTimestamp = (timestamp: number): string => {
  try {
    return Intl.DateTimeFormat("fr", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }).format(timestamp * 1000);
  } catch {
    return "";
  }
};

export const pythag = (p1: Coords, p2: Coords): number =>
  Math.sqrt(
    Math.pow(p2.latitude - p1.latitude, 2) +
      Math.pow(p2.longitude - p1.longitude, 2)
  );

export const last = (arr: any[]) =>
  arr ? arr[arr.length > 0 ? arr.length - 1 : 0] : [];

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

export function latLngToKm(p1: Coords, p2: Coords): number {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(p2.latitude - p1.latitude);
  var dLon = deg2rad(p2.longitude - p1.longitude);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(p1.latitude)) *
      Math.cos(deg2rad(p2.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}
