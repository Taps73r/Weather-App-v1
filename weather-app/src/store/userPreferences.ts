import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCity } from "./fetchCityThunk";

interface UserPreferencesState {
    city: string;
    location: string;
    language: string;
    loading: boolean;
    error: string | null;
}

const initialState: UserPreferencesState = {
    city: "",
    location: "",
    language: "en",
    loading: false,
    error: null,
};

const userPreferencesSlice = createSlice({
    name: "userPreferences",
    initialState,
    reducers: {
        setCity(state, action: PayloadAction<string>) {
            state.city = action.payload;
        },
        setLanguage(state, action: PayloadAction<string>) {
            state.language = action.payload;
        },
        setLocation(state, action: PayloadAction<string>) {
            state.location = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCity.fulfilled, (state, action) => {
                state.loading = false;
                state.city = action.payload;
            })
            .addCase(fetchCity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setCity, setLanguage, setLocation, setError } = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;
