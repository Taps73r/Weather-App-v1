"use client";

import { ICondition } from "@/types/CurrentWeatherData";
import { getDayOfWeek } from "@/utils/getDayOfWeek";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

interface IDayCardProps {
    date: string;
    maxTemp: number;
    minTemp: number;
    avgTemp: number;
    condition: ICondition;
    rainChance: number;
    snowChance: number;
    windSpeed: number;
}

export function DayCard(props: IDayCardProps) {
    const dayOfWeek = getDayOfWeek(props.date);

    return (
        <article className="flex flex-col items-center">
            <p>{dayOfWeek}</p>
            <p>{props.date}</p>
            <Card>
                <CardBody>
                    <Image
                        width={64}
                        height={64}
                        src={`https:${props.condition.icon}`}
                        alt={props.condition.text}
                    />
                    <p>Max Temperature: {props.maxTemp}°C</p>
                    <p>Average Temperature: {props.avgTemp}°C</p>
                    <p>Min Temperature: {props.minTemp}°C</p>
                    <p>Wind Speed: {props.windSpeed} kph</p>
                    <p>Rain chance: {props.rainChance}%</p>
                    <p>Snow chance: {props.snowChance}%</p>
                </CardBody>
            </Card>
        </article>
    );
}
