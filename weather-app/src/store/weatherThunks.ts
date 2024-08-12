import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const forecastDaysWeather = createAsyncThunk(
    "weather/forecastWeather",
    async (city: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_WEATHER}/forecast.json`,
                {
                    params: {
                        q: city,
                        days: 3,
                        key: process.env.NEXT_PUBLIC_API_KEY,
                    },
                }
            );
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data);
            } else {
                throw error;
            }
        }
    }
);
