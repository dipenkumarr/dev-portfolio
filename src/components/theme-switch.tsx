"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            className="flex items-center justify-center scale-105 fixed bottom-5 right-5 sm:bottom-10 sm:right-10 bg-white/5 w-10 h-10 sm:w-12 sm:h-12 backdrop-blur-md border border-black/40 shadow-2xl rounded-full dark:bg-gray-950/5 dark:text-white dark:border-white/40"
            onClick={toggleTheme}
            style={{ outline: "none" }}
        >
            <motion.div
                key={theme}
                initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
                transition={{ type: "spring", stiffness: 70, damping: 16, mass: 0.7, ease: "easeInOut" }}
            >
                {theme === "light" ? <BsSun /> : <BsMoon />}
            </motion.div>
        </button>
    );
}
