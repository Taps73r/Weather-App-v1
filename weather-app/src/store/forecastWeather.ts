import { createSlice } from "@reduxjs/toolkit";
import { forecastDaysWeather } from "./weatherThunks";
import { IWeatherData } from "@/types/WeatherData";

interface IWeatherState {
    data: IWeatherData | null;
    loading: boolean;
    weatherError: string | null;
}

const initialState: IWeatherState = {
    data: null,
    loading: false,
    weatherError: null,
};

const forecastWeatherSlice = createSlice({
    name: "forecastWeather",
    initialState,
    reducers: {
        clearData(state) {
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(forecastDaysWeather.pending, (state) => {
                state.loading = true;
                state.weatherError = null;
            })
            .addCase(forecastDaysWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(forecastDaysWeather.rejected, (state, action) => {
                state.loading = false;
                state.weatherError = action.payload as string;
            });
    },
});

export const { clearData } = forecastWeatherSlice.actions;
export default forecastWeatherSlice.reducer;
