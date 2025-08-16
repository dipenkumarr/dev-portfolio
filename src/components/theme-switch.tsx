"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

type Theme = "light" | "dark";

type ThemeSwitchProps = {
	variant?: "floating" | "inline";
	className?: string;
	ariaLabel?: string;
};

export default function ThemeSwitch({
	variant = "floating",
	className = "",
	ariaLabel = "Toggle theme",
}: ThemeSwitchProps) {
	const { theme, toggleTheme } = useTheme();

	const baseClasses =
		"flex items-center justify-center icon-btn border-black/20 dark:border-white/20";
	const variantClasses =
		variant === "floating"
			? "scale-105 fixed bottom-5 right-5 sm:bottom-10 sm:right-10 h-10 w-10"
			: "h-9 w-9 p-0";

	return (
		<button
			className={`${baseClasses} ${variantClasses} ${className}`}
			onClick={toggleTheme}
			aria-label={ariaLabel}
			title={ariaLabel}
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
