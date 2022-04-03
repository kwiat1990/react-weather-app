import { useState } from "react";
import { Coords } from "@/types/coords.type";

const useGeolocation = () => {
  const [coords, setCoords] = useState<Coords | null>(null);
  const [error, setError] = useState<GeolocationPositionError | null>(null);
  const [isLoading, setLoading] = useState(false);

  const isSupported = "geolocation" in navigator;
  const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  };

  const onSuccess = (pos: GeolocationPosition) => {
    const { longitude, latitude } = pos.coords;
    setCoords({ lon: longitude, lat: latitude });
    setError(null);
    setLoading(false);
  };

  const onError = (err: GeolocationPositionError) => {
    setCoords(null);
    setError(err);
    setLoading(false);
  };

  const locate = () => {
    if (isSupported) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    }
  };

  return {
    coords,
    error,
    isLoading,
    isSupported,
    locate,
  };
};

export { useGeolocation };
