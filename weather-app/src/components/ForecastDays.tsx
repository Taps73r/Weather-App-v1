"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { forecastDaysWeather } from "@/store/weatherThunks";
import { DayCard } from "./DayCard";

export function ForecastDays() {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector(
        (state: RootState) => state.forecastWeatherReducer
    );
    const city = useSelector(
        (state: RootState) => state.userPreferencesReducer.city
    );

    useEffect(() => {
        if (city) {
            dispatch(forecastDaysWeather(city));
        }
    }, [city, dispatch]);

    return (
        <section>
            {data?.forecast.forecastday.map((day) => (
                <DayCard key={day.date_epoch} />
            ))}
        </section>
    );
}
