import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCity = createAsyncThunk(
    "city/fetchCityThunk",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("https://ipapi.co/json/");
            console.log(response);
            return response.data.city;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data);
            } else {
                throw error;
            }
        }
    }
);
