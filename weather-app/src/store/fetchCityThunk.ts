import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCity = createAsyncThunk(
    "city/fetchCityThunk",
    async (_, { rejectWithValue }) => {
        try {
            const getPosition = (): Promise<GeolocationPosition> => {
                return new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
            };

            const position = await getPosition();
            const { latitude, longitude } = position.coords;

            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_OPENCAGE_API_URL}`,
                {
                    params: {
                        q: `${latitude}+${longitude}`,
                        language: "en",
                        pretty: 1,
                        key: process.env.NEXT_PUBLIC_API_CITY_KEY,
                    },
                }
            );
            const city =
                response.data.results[0].components.city ||
                response.data.results[0].components.town ||
                response.data.results[0].components.village;
            if (!city) {
                return rejectWithValue("City not found");
            }
            return city;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data);
            } else {
                return rejectWithValue(
                    "Failed to fetch geolocation or city data"
                );
            }
        }
    }
);
