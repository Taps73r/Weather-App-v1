import { combineReducers } from "@reduxjs/toolkit";
import currentDayWeatherReducer from "./currentDayWeather";
import forecastWeatherReducer from "./forecastWeather";
import userPreferencesReducer from "./userPreferences";

const rootReducer = combineReducers({
    currentDayWeatherReducer,
    forecastWeatherReducer,
    userPreferencesReducer,
});

export default rootReducer;
