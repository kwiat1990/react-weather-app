import { Card } from "@/components/Card";
import { useFavs } from "@/context/favs.context";
import { useForecast } from "@/hooks/useForecast";
import { useSetData } from "@/hooks/useSetData";
import { Forecast } from "@/types/forecast.type";
import React, { useEffect } from "react";
import { IoTrashOutline } from "react-icons/io5";

const Fav = () => {
  const { forecast, getByCity } = useForecast();
  const favs = useFavs();
  const forecasts = useSetData<Forecast>();

  useEffect(() => {
    favs.state.forEach((city) => {
      getByCity(city);
    });
  }, []);

  useEffect(() => {
    forecast && forecasts.add(forecast);
  }, [forecast]);

  const onClick = () => {
    forecasts.clear();
    favs.clear();
  };

  const renderCard = () => {
    if (forecasts.state.size > 0) {
      return Array.from(forecasts.state).map((entry) => {
        return (
          <Card key={entry.city} forecast={entry} className="mb-8">
            <button
              aria-label="Remove city from your fav list"
              onClick={() => {
                forecasts.remove(entry);
                favs.remove(entry.city);
              }}
            >
              <IoTrashOutline className="ml-auto mr-0" />
            </button>
          </Card>
        );
      });
    }
    return <p className="text-center">You do not have any locations saved yet.</p>;
  };

  return (
    <React.Fragment>
      <h1>Your favs list</h1>
      {forecasts.state.size > 1 && (
        <button className="mb-4 button" onClick={() => {}}>
          Remove all cities
        </button>
      )}
      {renderCard()}
    </React.Fragment>
  );
};

export { Fav };
