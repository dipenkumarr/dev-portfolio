import Header from "@/components/header";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

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
		<html lang="en" className="scroll-smooth">
			<body
				className={`${montserrat.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 overscroll-none dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}
			>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Header />
						{children}
						<Footer />
						<Toaster position="top-right" />
						<ThemeSwitch />
						<Analytics />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
