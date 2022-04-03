export interface Forecast {
  wind: ForecastWind;
  temp: ForecastTemp;
  pressure: number;
  icon: string;
  humidity: number;
  description: string;
  city: string;
}

export interface ForecastWind {
  speed: number;
  deg: number;
  direction: string;
}

export interface ForecastTemp {
  current: number;
  min: number;
  max: number;
}
