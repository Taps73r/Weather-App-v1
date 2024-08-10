"use client";

import { ICondition } from "@/types/CurrentWeatherData";
import { getDayOfWeek } from "@/utils/getDayOfWeek";
import { Card, CardBody } from "@nextui-org/react";
import { useTheme } from "next-themes";
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
    region: string;
    country: string;
}

export function DayCard(props: IDayCardProps) {
    const dayOfWeek = getDayOfWeek(props.date);
    const { theme } = useTheme();

    const backgroundStyle =
        theme === "light"
            ? {
                  background:
                      "linear-gradient(150deg, #E57E7E 0%, #DED47F 100%)",
              }
            : {
                  background:
                      "linear-gradient(150deg, #6CCDB0 0%, #1E3A8A 100%)",
              };

    return (
        <article className="flex flex-col items-center">
            <Card
                className="w-[320px] p-2 text-white"
                style={{
                    ...backgroundStyle,
                }}
            >
                <CardBody className="flex flex-col items-center">
                    <div className="flex flex-row justify-between pb-3 w-full items-center font-medium">
                        <p className="text-2xl">{dayOfWeek}</p>
                        <p className="text-xl">{props.date}</p>
                    </div>
                    <Image
                        className="pb-1"
                        width={64}
                        height={64}
                        src={`https:${props.condition.icon}`}
                        alt={props.condition.text}
                    />
                    <p className="lg:text-3xl pb-3 font-bold">
                        {props.maxTemp}°C
                    </p>
                    <div className="flex flex-row pb-[50px] justify-center w-full gap-1 items-center font-normal text-xl">
                        <p>{`${props.region},`}</p>
                        <p>{props.country}</p>
                    </div>
                    <div className="flex flex-row justify-between w-full items-center font-medium">
                        <div className="flex flex-col items-center">
                            <p className="text-xl">{props.rainChance}%</p>
                            <p className="text-base">Rain Chance</p>
                        </div>
                        <div className="flex flex-col text-md items-center">
                            <p className="text-xl">{props.windSpeed}</p>
                            <p className="text-base">Wind Speed</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </article>
    );
}
