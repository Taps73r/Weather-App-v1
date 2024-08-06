import { createSlice } from "@reduxjs/toolkit";
import { currentDayWeather } from "./weatherThunks";
import { ICurrentWeatherData } from "../types/CurrentWeatherData";

interface IWeatherState {
    data: ICurrentWeatherData | null;
    loading: boolean;
    error: string | null;
}

const initialState: IWeatherState = {
    data: null,
    loading: false,
    error: null,
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(currentDayWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(currentDayWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(currentDayWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default weatherSlice.reducer;
