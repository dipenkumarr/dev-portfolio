"use client";
import React, { useEffect, useState } from "react";

const location = "Vancouver";

export default function Footer() {
	const [temperature, setTemperature] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.main && data.main.temp !== undefined) {
					setTemperature(Math.round(data.main.temp) + "°C");
				}
			})
			.catch(() => setError("Unable to fetch weather"));
	}, []);

	return (
		<>
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
				<span className="relative flex h-3 w-3">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-3 w-3 bg-pink-400/70"></span>
				</span>
				<span className="text-gray-600 dark:text-gray-400">
					{location}
				</span>
				{temperature && (
					<span className="text-gray-600 dark:text-gray-400">
						{temperature}
					</span>
				)}
			</div>
		</>
	);
}
