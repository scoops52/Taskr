'use client';
import { Provider } from "react-redux";
import store from "@/store/store";
import React from "react";
import { ThemeProvider } from "next-themes";

function Providers({ children }: { children: React.ReactNode}) {
    return (
   <ThemeProvider>
        <Provider store={store}>
            {children}
        </Provider>
    </ThemeProvider>
    )
}

export default Providers