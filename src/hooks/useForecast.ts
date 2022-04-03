import { useState } from "react";
import { Forecast } from "@/types/forecast.type";
import { weatherService } from "@/services/weather.service";
import { Coords } from "@/types/coords.type";

const useForecast = () => {
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [error, setError] = useState("");

  const service = weatherService();

  const getByCity = async (name: string) => {
    const res = await service.getWeatheryByCity(name);
    setForecast(res.data);
    setError(res.error);
  };

  const getByCoords = async (coords: Coords) => {
    const res = await service.getWeatheryByCoords(coords);
    setForecast(res.data);
    setError(res.error);
  };

  return {
    getByCity,
    getByCoords,
    forecast,
    error,
  };
};

export { useForecast };
