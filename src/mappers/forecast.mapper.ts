import { formatWindDirection } from "@/utils/formatWindDirection";
import { symbolsNameMapper } from "@/mappers/symbols.mapper";
import { WeatherResponse } from "@/types/api/weather.type";
import { Forecast } from "@/types/forecast.type";

const forecastMapper = (response: WeatherResponse): Forecast => {
  const { weather, main, name, wind } = response;
  const today = weather[0];

  const forecast: Forecast = {
    city: name,
    temp: {
      current: main.temp,
      max: main.temp_max,
      min: main.temp_min,
    },
    humidity: main.humidity,
    pressure: main.pressure,
    description: today.description,
    icon: symbolsNameMapper(today.id),
    wind: {
      speed: wind.speed,
      deg: wind.deg,
      direction: formatWindDirection(wind.deg),
    },
  };

  return forecast;
};

export { forecastMapper };
