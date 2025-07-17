import About from "@/components/about";
import Contacts from "@/components/contacts";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import FontLoader from "@/components/font-loader";

export default function Home() {
	return (
		// <FontLoader>
		<main className="flex flex-col items-center px-4 md:px-16 pt-14 w-full min-h-screen">
			<Intro />
			{/* <SectionDivider /> */}
			<Experience />
			<Projects />
			<Skills />

			{/* About and Contact sections side by side on desktop, stacked on mobile */}
			<section className="w-full max-w-7xl mt-20 mb-32">
				<div className="flex flex-col lg:flex-row lg:gap-12 gap-16">
					<div className="w-full lg:w-1/2">
						<About />
					</div>
					<div className="w-full lg:w-1/2">
						<Contacts />
					</div>
				</div>
			</section>
		</main>
		// </FontLoader>
	);
}
