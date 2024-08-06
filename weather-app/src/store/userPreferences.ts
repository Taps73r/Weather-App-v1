import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserPreferencesState {
    city: string;
    theme: string;
    language: string;
}

const initialState: UserPreferencesState = {
    city: "New York",
    theme: "light",
    language: "en",
};

const userPreferencesSlice = createSlice({
    name: "userPreferences",
    initialState,
    reducers: {
        setCity(state, action: PayloadAction<string>) {
            state.city = action.payload;
        },
        setTheme(state, action: PayloadAction<string>) {
            state.theme = action.payload;
        },
        setLanguage(state, action: PayloadAction<string>) {
            state.language = action.payload;
        },
    },
});

export const { setCity, setTheme, setLanguage } = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;
