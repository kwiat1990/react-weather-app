import { useState } from "react";
import { useOutletContext } from "react-router-dom";

type LoadingContextType = {
  hasLoaded: boolean;
};

export function setLoadingContext() {
  const [hasLoaded, setLoaded] = useState<boolean>(false);
  return {hasLoaded, setLoaded};
}

export function useLoadingContext() {
  return useOutletContext<LoadingContextType>();
}
