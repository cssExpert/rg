"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Fix for React 19 / Next.js warning
  const scriptProps =
    typeof window === "undefined"
      ? {}
      : ({ type: "application/json" } as const);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      scriptProps={scriptProps} // 👈 Add this line
    >
      {children}
    </NextThemesProvider>
  );
}
