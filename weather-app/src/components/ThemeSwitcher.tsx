"use client";

import { Switch } from "@nextui-org/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-row justify-end p-8">
            <Switch
                defaultSelected
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
                size="lg"
                color="primary"
                startContent={<SunIcon />}
                endContent={<MoonIcon />}
            >
                {theme === "dark" ? "Dark mode" : "Light mode"}
            </Switch>
        </div>
    );
}
