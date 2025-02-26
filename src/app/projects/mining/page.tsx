import { ProjectCard } from "@/components/project-card"
import localFont from "next/font/local"

const glancyNeue = localFont({
	src: "../../fonts/GlancyrNeue-VF.otf",
	variable: "--font-glancy-neue",
	weight: "100 900",
})

const miningProjects = [
	{
		title:
			"Complete refurbishment of Keestrack 1800 Explorer Deck Screen for Coal Plant",

		description:
			"Our team successfully completed the refurbishment of the Keestrack 1800 Explorer Deck Screen, ensuring optimal performance and efficiency for  the coal plant. This project involved meticulous attention to detail, from mechanical repairs to electrical upgrades, delivering a state-of-the-art solution tailored to the plant's needs.",
		imageUrl: "/images/image4.jpg",
		category: "Distribution",
		projectLink: "/projects/mining/refurbishment-coal-plant", // Add project link
	},
	{
		title:
			"Fabrication and Installation of 4 Dilute Tanks for Mining Operation",

		description:
			"Our team expertly designed, fabricated, and installed four state-of-the-art dilute tanks tailored to the specific needs of a large-scale mining operation. These tanks were constructed using high-quality materials to ensure durability and efficiency in handling the demanding conditions of the mining environment. The project involved precise engineering, seamless installation, and rigorous testing to guarantee optimal performance and reliability for the client's operations.",
		imageUrl: "/projects/coal-plant/4.jpeg",
		category: "Distribution",
		projectLink: "/projects/mining/fabrication-installation", // Add project link
	},
]

export default function MiningProjectsPage() {
	return (
		<div className="container mx-auto px-4 py-12 mt-16">
			<h1 className={`${glancyNeue.className} text-4xl font-bold mb-8`}>
				Innovative Mining Projects
			</h1>
			<p className="text-xl mb-8">
				Explore cutting-edge mining engineering projects that push the
				boundaries of technology, sustainability, and efficiency in the resource
				extraction industry.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{miningProjects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</div>
	)
}
