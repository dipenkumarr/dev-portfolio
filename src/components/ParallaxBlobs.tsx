"use client";

import React, { useEffect, useState } from "react";
import BgBlob from "@/components/BgBlob";

const ParallaxBlobs = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Parallax speeds
	const blob1Top = -106 + scrollY * 1.08; // original: -6rem = -96px
	const blob2Top = -16 + scrollY * 0.98; // original: -1rem = -16px

	// console.log("scrollY:", scrollY);

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
