"use client";

import React, { useEffect, useRef, useState } from "react";
import BgBlob from "@/components/BgBlob";

const ParallaxBlobs = () => {
	const [isMobile, setIsMobile] = useState(false);
	const blob1Ref = useRef<HTMLDivElement>(null);
	const blob2Ref = useRef<HTMLDivElement>(null);
	const scrollY = useRef(0);
	const ticking = useRef(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		const updateBlobs = () => {
			if (!isMobile) {
				const y = window.scrollY;
				if (blob1Ref.current) {
					const top = -106 + y * 1.07;
					blob1Ref.current.style.top = `${top}px`;
				}
				if (blob2Ref.current) {
					const top = -16 + y * 0.98;
					blob2Ref.current.style.top = `${top}px`;
				}
			} else {
				// if (blob1Ref.current) blob1Ref.current.style.top = `-106px`;
				// if (blob2Ref.current) blob2Ref.current.style.top = `-16px`;
			}
			ticking.current = false;
		};

		const handleScroll = () => {
			if (!ticking.current) {
				ticking.current = true;
				requestAnimationFrame(updateBlobs);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll);
		// Initial position
		updateBlobs();

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isMobile]);

	return (
		<>
			{isMobile ? (
				<div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
					{/* <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div> */}
					<div className="absolute top-0 z-[-2] h-screen w-screen bg-white dark:bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
				</div>
			) : (
				<>
					<BgBlob
						ref={blob1Ref}
						className="bg-[#f4d3d4] absolute -z-10 right-[-10rem] h-[38.25rem] w-[30.25rem] rounded-full blur-[5rem] sm:w-[68.75rem] dark:bg-[#946263] dark:bg-opacity-40 overscroll-none overflow-hidden bg-opacity-50"
						style={{ top: `-106px` }}
					/>
					<BgBlob
						ref={blob2Ref}
						className="bg-[#dbd7fb] absolute -z-10 left-[-35rem] h-[31.25rem] w-[40rem] rounded-full blur-[6rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-opacity-50 dark:bg-[#676394] dark:bg-opacity-50 overscroll-none overflow-hidden"
						style={{ top: `-16px` }}
					/>
				</>
			)}
		</>
	);
};

export default ParallaxBlobs;
