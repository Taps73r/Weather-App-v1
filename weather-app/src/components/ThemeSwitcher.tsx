"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex gap-4">
            <Button size="sm" variant="flat" onClick={() => setTheme("light")}>
                Light
            </Button>
            <Button size="sm" variant="flat" onClick={() => setTheme("dark")}>
                Dark
            </Button>
        </div>
    );
}
