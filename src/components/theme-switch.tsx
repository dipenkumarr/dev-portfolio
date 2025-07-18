"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			className="flex items-center justify-center scale-105 fixed bottom-5 right-5 sm:bottom-10 sm:right-10 bg-white/5 w-10 h-10 sm:w-12 sm:h-12 backdrop-blur-md border border-black/40 shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all duration-200 dark:bg-gray-950/5 dark:text-white dark:border-white/40"
			onClick={toggleTheme}
		>
			{theme === "light" ? <BsSun /> : <BsMoon />}
		</button>
	);
}
