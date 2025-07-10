"use client";

import { useEffect, useState } from "react";

export default function FontLoader({
	children,
}: {
	children: React.ReactNode;
}) {
	const [fontLoaded, setFontLoaded] = useState(false);

	useEffect(() => {
		if (document.fonts) {
			document.fonts.ready.then(() => {
				setFontLoaded(true);
			});
		} else {
			setTimeout(() => setFontLoaded(true), 1000);
		}
	}, []);

	return (
		<div style={{ position: "relative", minHeight: "100vh" }}>
			<div
				style={{
					position: "fixed",
					inset: 0,
					display: fontLoaded ? "none" : "flex",
					alignItems: "center",
					justifyContent: "center",
					background: "var(--background, #fff)",
					zIndex: 50,
					fontSize: "4rem",
					transition: "opacity 0.5s",
					opacity: fontLoaded ? 0 : 1,
					pointerEvents: fontLoaded ? "none" : "auto",
				}}
				aria-hidden={!fontLoaded}
			>
				<span
					role="img"
					aria-label="Waving Hand"
					className="waving-hand"
				>
					👋
				</span>
				<style jsx>{`
					.waving-hand {
						display: inline-block;
						animation: wave 1.5s infinite;
						transform-origin: 70% 70%;
					}
					@keyframes wave {
						0% {
							transform: rotate(0deg);
						}
						10% {
							transform: rotate(14deg);
						}
						20% {
							transform: rotate(-8deg);
						}
						30% {
							transform: rotate(14deg);
						}
						40% {
							transform: rotate(-4deg);
						}
						50% {
							transform: rotate(10deg);
						}
						60% {
							transform: rotate(0deg);
						}
						100% {
							transform: rotate(0deg);
						}
					}
				`}</style>
			</div>
			<div
				style={{
					opacity: fontLoaded ? 1 : 0,
					transition: "opacity 0.5s",
				}}
			>
				{children}
			</div>
		</div>
	);
}
