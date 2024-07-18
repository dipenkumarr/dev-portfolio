import { useActiveSection } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(
	sectionName: SectionName,
	threshold = 0.75,
	initialInView = false
) {
	const { ref, inView } = useInView({
		initialInView: initialInView,
		threshold: threshold,
	});
	const { setActiveSection, timeOfLastClick } = useActiveSection();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (inView && Date.now() - timeOfLastClick > 1000) {
				setActiveSection(sectionName);
			}
		}, 100);

		return () => clearTimeout(timer);
	}, [inView, setActiveSection, timeOfLastClick, sectionName]);

	return { ref };
}
