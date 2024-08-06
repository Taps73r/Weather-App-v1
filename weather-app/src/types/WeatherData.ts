import { ICurrent, ILocation } from "./CurrentWeatherData";
import { IForecast } from "./ForecastDayData";

export interface IWeatherData {
    location: ILocation;
    current: ICurrent;
    forecast: IForecast;
}
