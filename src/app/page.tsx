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
		<main className="flex flex-col items-center px-4 md:px-16 pt-14">
			<Intro />
			{/* <SectionDivider /> */}

			<About />
			<Experience />
			<Projects />
			<Skills />
			<Contacts />
		</main>
		// </FontLoader>
	);
}
