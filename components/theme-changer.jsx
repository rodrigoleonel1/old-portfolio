"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeChanger() {
  const { setTheme } = useTheme();

  return (
    <>
      <Sun
        onClick={() => setTheme("dark")}
        className="
          cursor-pointer
          rotate-0 scale-100 transition-all 
          dark:-rotate-90 dark:scale-0
        "
      />
      <Moon
        onClick={() => setTheme("light")}
        className="
          cursor-pointer
          absolute rotate-90 scale-0 transition-all 
          dark:rotate-0 dark:scale-100 
        "
      />
    </>
  );
}