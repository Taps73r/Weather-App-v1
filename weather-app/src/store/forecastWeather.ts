import { createSlice } from "@reduxjs/toolkit";
import { forecastDaysWeather } from "./weatherThunks";
import { IWeatherData } from "@/types/WeatherData";

interface IWeatherState {
    data: IWeatherData | null;
    loading: boolean;
    error: string | null;
}

const initialState: IWeatherState = {
    data: null,
    loading: false,
    error: null,
};

const forecastWeatherSlice = createSlice({
    name: "forecastWeather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(forecastDaysWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(forecastDaysWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(forecastDaysWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default forecastWeatherSlice.reducer;
