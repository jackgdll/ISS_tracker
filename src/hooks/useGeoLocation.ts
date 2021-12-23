import { useEffect, useState } from "react";
import { Coords } from "../state/types";

const useGeoLocation = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [coords, setCoords] = useState<Coords>();

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Browser does not support geolocation.");
    } else {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLoading(false);
          setCoords(position.coords);
        },
        () => {
          setLoading(false);
          setError("Unable to retrieve location.");
        }
      );
    }
  }, []);

  return { loading, error, coords };
};

export default useGeoLocation;
