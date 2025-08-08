"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			className="flex items-center justify-center scale-105 fixed bottom-5 right-5 sm:bottom-10 sm:right-10 icon-btn border-black/20 dark:border-white/20"
			onClick={toggleTheme}
			style={{ outline: "none" }}
		>
			<motion.div
				key={theme}
				initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
				animate={{ opacity: 1, scale: 1, rotate: 0 }}
				exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
				transition={{
					type: "spring",
					stiffness: 70,
					damping: 16,
					mass: 0.7,
					ease: "easeInOut",
				}}
			>
				{theme === "light" ? <BsSun /> : <BsMoon />}
			</motion.div>
		</button>
	);
}
