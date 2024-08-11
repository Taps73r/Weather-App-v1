"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchCity } from "@/store/fetchCityThunk";
import { setCity } from "@/store/userPreferences";
import { forecastDaysWeather } from "@/store/weatherThunks";
import { Button, Input } from "@nextui-org/react";

export function CityInput() {
    const dispatch = useDispatch<AppDispatch>();
    const city = useSelector(
        (state: RootState) => state.userPreferencesReducer.city
    );
    const loading = useSelector(
        (state: RootState) => state.forecastWeatherReducer.loading
    );

    const [inputCity, setInputCity] = useState("");

    useEffect(() => {
        if (!city) {
            dispatch(fetchCity());
        }
    }, [city, dispatch]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputCity(e.target.value);
    };

    const handleButtonClick = () => {
        if (city) {
            dispatch(setCity(inputCity));
            dispatch(forecastDaysWeather(inputCity));
        }
        if (!city) {
            dispatch(fetchCity());
            dispatch(forecastDaysWeather(inputCity));
        }
    };

    return (
        <div className="flex flex-row justify-center gap-4 mt-6">
            <Input
                className="560:max-w-sm min-w-[190px] w-[50%] text-4xl"
                variant="faded"
                color="default"
                label="City"
                type="text"
                value={inputCity}
                onChange={handleInputChange}
                description="Enter city name"
            />
            <Button
                className="max-w-sm h-[56px] text-md"
                variant="faded"
                isLoading={loading}
                onClick={handleButtonClick}
            >
                Find
            </Button>
        </div>
    );
}
