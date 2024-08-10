"use client";

import { NextUIProvider } from "@nextui-org/react";
import store from "../store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <NextUIProvider>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    themes={["light", "dark"]}
                >
                    {children}
                </ThemeProvider>
            </NextUIProvider>
        </Provider>
    );
}
