import { combineReducers } from "@reduxjs/toolkit";
import forecastWeatherReducer from "./forecastWeather";
import userPreferencesReducer from "./userPreferences";

const rootReducer = combineReducers({
    forecastWeatherReducer,
    userPreferencesReducer,
});

export default rootReducer;
