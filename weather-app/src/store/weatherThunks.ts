import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const currentDayWeather = createAsyncThunk(
    "weather/currentDayWeather",
    async (city: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://api.weatherapi.com/v1/current.json`,
                {
                    params: {
                        q: city,
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

export const forecastDaysWeather = createAsyncThunk(
    "weather/forecastWeather",
    async (city: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://api.weatherapi.com/v1/forecast.json`,
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
