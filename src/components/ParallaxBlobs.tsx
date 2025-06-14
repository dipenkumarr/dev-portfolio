"use client";

import React, { useEffect, useState } from "react";
import BgBlob from "@/components/BgBlob";

const ParallaxBlobs = () => {
	const [scrollY, setScrollY] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768); // 768px is typical tablet breakpoint
		};

		const handleScroll = () => {
			if (!isMobile) {
				setScrollY(window.scrollY);
			}
		};

		handleResize(); // Initial check
		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isMobile]);

	// Parallax speeds - only apply if not mobile
	const blob1Top = isMobile ? -106 : -106 + scrollY * 1.08;
	const blob2Top = isMobile ? -16 : -16 + scrollY * 0.98;

	console.log("scrollY:", scrollY);

	return (
		<>
			<BgBlob
				className="bg-[#fbe2e3] absolute -z-10 right-[-10rem] h-[38.25rem] w-[31.25rem] rounded-full blur-[20rem] sm:w-[68.75rem] dark:bg-[#946263] dark:bg-opacity-40 overscroll-none overflow-hidden bg-opacity-40"
				style={{ top: `${blob1Top}px` }}
			/>
			<BgBlob
				className="bg-[#dbd7fb] absolute -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[20rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-opacity-40 dark:bg-[#676394] dark:bg-opacity-50 overscroll-none overflow-hidden"
				style={{ top: `${blob2Top}px` }}
			/>
		</>
	);
};

export default ParallaxBlobs;
