import { Alert } from "@/components/Alert";
import { Card } from "@/components/Card";
import { Searchbox } from "@/components/Searchbox";
import { useFavs } from "@/context/favs.context";
import { useForecast } from "@/hooks/useForecast";
import { useGeolocation } from "@/hooks/useGeolocation";
import { AlertType } from "@/types/alert.type";
import { useEffect, useState } from "react";
import { IoBookmarkOutline, IoLocateOutline } from "react-icons/io5";

const Home = () => {
  const [city, setCity] = useState("");
  const { add, has } = useFavs();
  const { forecast, error: forecastError, getByCity, getByCoords } = useForecast();
  const { isLoading, coords, locate, error: geoError } = useGeolocation();

  const getError = () => {
    const isBeforeWeatherFetch = !forecast && !forecastError;
    return isBeforeWeatherFetch ? geoError?.message : forecastError;
  };

  const hasError = getError() && getError() !== "";

  const onSearch = (name: string) => {
    setCity(name);
    getByCity(name);
  };

  const onGeolocation = () => {
    if (!forecast && coords) {
      getByCoords(coords);
    }
    setCity(forecast?.city || "");
  };

  useEffect(() => {
    onGeolocation();
  }, [coords]);

  const renderCard = () => {
    if (forecast) {
      return (
        <Card forecast={forecast} className="mt-12">
          {!has(forecast.city) && (
            <button aria-label="Add city to your fav list" onClick={() => add(forecast.city)}>
              <IoBookmarkOutline className="ml-auto mr-0" />
            </button>
          )}
        </Card>
      );
    }
  };

  const renderAlerts = () => {
    let alerts = [];
    if (isLoading) {
      alerts.push(
        <Alert className="mb-12" key="a">
          One moment please, we are trying to fetch weather data for your location
        </Alert>
      );
    }
    if (hasError) {
      alerts.push(
        <Alert type={AlertType.ERROR} className="mb-12" key="b">
          {getError()}
        </Alert>
      );
    }
    return alerts;
  };

  return (
    <div className="home">
      <h1>Check current weather</h1>
      {renderAlerts()}
      <Searchbox
        disabled={isLoading}
        placeholder="Enter a city"
        onSubmit={(name) => onSearch(name)}
        onChange={(city) => setCity(city)}
        onClear={() => setCity("")}
      >
        {!city && (
          <button type="button" onClick={() => locate()}>
            <IoLocateOutline />
          </button>
        )}
      </Searchbox>
      {renderCard()}
    </div>
  );
};

export { Home };
