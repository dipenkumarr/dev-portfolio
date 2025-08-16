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
	title: "Dipen Kumar — Software Developer",
	description: "Software developer and CS student building web and ML stuff.",
	metadataBase: new URL("https://dipenkumar.vercel.app"),
	alternates: { canonical: "/" },
	openGraph: {
		title: "Dipen Kumar — Software Developer",
		description:
			"Software developer and CS student building web and ML stuff.",
		url: "https://dipenkumar.vercel.app/",
		siteName: "Dipen Kumar",
		type: "website",
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
				<link rel="icon" href="/icon.png" />
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
							<Analytics />
							{/* Show floating theme button only on small screens */}
							<div className="block lg:hidden">
								<ThemeSwitch variant="floating" />
							</div>
						</FontLoader>
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
