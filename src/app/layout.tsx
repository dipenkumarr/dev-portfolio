import Header from "@/components/header";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import React, { useEffect, useState } from "react";
import BgBlob from "@/components/BgBlob";
import ParallaxBlobs from "@/components/ParallaxBlobs";
import Head from "next/head";
import FontLoader from "@/components/font-loader";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const sfPro = localFont({
	src: [
		{
			path: "../../public/fonts/SF-Pro.ttf",
			weight: "500",
			style: "normal",
		},
	],
	variable: "--font-sf-pro",
	display: "swap",
});

export const metadata = {
	title: "Dipen | Software Developer & CS Student",
	description:
		"Dipen is a Computer Science student and Software Developer specializing in building modern web applications with React, Next.js, and Node.js.",
	keywords: [
		"Dipen",
		"Full Stack Developer",
		"Web Developer",
		"Computer Science",
		"React",
		"Next.js",
		"Portfolio",
		"Software Developer",
		"Machine Learning",
	],
	authors: [{ name: "Dipen" }],
	metadataBase: new URL("https://dipen-kumar-portfolio.vercel.app/"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Dipen | Software Developer & CS Student",
		description:
			"Dipen is a Computer Science student and Full Stack Developer specializing in building modern web applications with React, Next.js, and Node.js.",
		url: "https://dipen-kumar-portfolio.vercel.app/",
		siteName: "Dipen&apos;s Portfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/public/intro-image.png",
				width: 1200,
				height: 630,
				alt: "Dipen's Portfolio",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`scroll-smooth ${sfPro.variable}`}>
			<Head>
				<link
					rel="preload"
					href="/fonts/SF-Pro.ttf"
					as="font"
					type="font/ttf"
					crossOrigin="anonymous"
				/>
			</Head>
			<body
				className={`font-sf-pro-expanded-regular bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 overscroll-none dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}
			>
				<ParallaxBlobs />

				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<FontLoader>
							<Header />
							{children}
							<Footer />
							<Toaster position="top-right" />
							<ThemeSwitch />
							<Analytics />
						</FontLoader>
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
