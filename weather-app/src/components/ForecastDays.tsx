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
    const { location, city } = useSelector(
        (state: RootState) => state.userPreferencesReducer
    );

    useEffect(() => {
        if (city) {
            dispatch(forecastDaysWeather(city));
        }
    }, [city, location, dispatch]);

    if (data) {
        return (
            <section className="flex 1080px:flex-row gap-10 justify-center pb-8 mt-14 flex-col">
                {data?.forecast.forecastday.map((day) => (
                    <DayCard
                        key={day.date_epoch}
                        region={data.location.region}
                        country={data.location.country}
                        date={day.date}
                        maxTemp={day.day.maxtemp_c}
                        minTemp={day.day.mintemp_c}
                        avgTemp={day.day.avgtemp_c}
                        condition={day.day.condition}
                        rainChance={day.day.daily_chance_of_rain}
                        snowChance={day.day.daily_chance_of_snow}
                        windSpeed={day.day.maxwind_kph}
                    />
                ))}
            </section>
        );
    }
}
