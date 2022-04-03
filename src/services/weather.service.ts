import { forecastMapper } from "@/mappers/forecast.mapper";
import { WeatherResponse } from "@/types/api/weather.type";
import { ApiResponse } from "@/types/apiResponse.type";
import { Coords } from "@/types/coords.type";
import { Forecast } from "@/types/forecast.type";
import { getJSON } from "@/utils/fetch";

const buildURL = (path: string) => {
  return `data/2.5/weather?${path}&units=metric&appid=${import.meta.env.VITE_APP_API_KEY}`;
};

const handleResponse = (res: ApiResponse<WeatherResponse>): ApiResponse<Forecast> => {
  return {
    data: res.data ? forecastMapper(res.data) : null,
    error: res.error,
  };
};

const weatherService = () => {
  const getWeatheryByCoords = async (coords: Coords) => {
    const res = await getJSON<WeatherResponse>(buildURL(`lat=${coords.lat}&lon=${coords.lon}`));
    return handleResponse(res);
  };

  const getWeatheryByCity = async (city: string) => {
    const res = await getJSON<WeatherResponse>(buildURL(`q=${city}`));
    return handleResponse(res);
  };

  return {
    getWeatheryByCoords,
    getWeatheryByCity,
  };
};

export { weatherService };
