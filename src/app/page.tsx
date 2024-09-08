import About from "@/components/about";
import Contacts from "@/components/contacts";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-24">
			<Intro />
			{/* <SectionDivider /> */}
			<About />
			<Projects />
			<Skills />
			<Experience />
			<Contacts />
		</main>
	);
}
