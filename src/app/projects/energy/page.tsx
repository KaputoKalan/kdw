import { ProjectCard } from "@/components/project-card"
import localFont from "next/font/local"

const glancyNeue = localFont({
	src: "../../fonts/GlancyrNeue-VF.otf",
	variable: "--font-glancy-neue",
	weight: "100 900",
})

const energyProjects = [
	{
		title: "Kasanjiku Distribution Extension",
		description:
			"The Kasanjiku Distribution Network Expansion project aims to improve the region's access to reliable electricity by upgrading existing infrastructure and extending power lines to underserved areas. This initiative will enhance energy distribution,reduce power outages, and promote economic growth by supporting local businesses and communities. With an increased capacity and modernized systems, theexpansion is set to meet the growing demand for electricity and improve the quality of life for residents.",
		imageUrl: "/projects/Kasanjiku/4.jpeg",
		category: "Distribution",
		projectLink: "/projects/energy/kasanjiku-distribution-extension", // Add project link
	},

	{
		title: "Chinyingi Distribution",
		description:
			"The Chinyingi Distribution Network project is designed to expand and upgrade the local electricity grid, improving energy access for residents and businesses in the Chinyingi area. With a focus on reliability and sustainability, this project will ensure a consistent power supply, reduce outages, and promote economic and social development. By increasing the network's capacity, it will support the growing energy needs of the community while enabling long-term growth and infrastructure stability.",
		imageUrl: "/projects/chinyingi/1.jpeg",
		category: "Distribution",
		projectLink: "/projects/energy/chinyingi", // Add project link
	},
	{
		title: "Kambilombilo Distribution Network",
		description:
			"The Kambilombilo Distribution Network project is focused on expanding and enhancing electricity access to the Kambilombilo region. By upgrading and extending the power grid, the project will provide more reliable and consistent energy supply to households, businesses, and public institutions. This expansion is crucial for fostering economic development, improving living standards, and ensuring sustainable energy access for the growing population in the area.",
		imageUrl: "/projects/kambilombilo-1/3.jpeg",
		category: "Distribution",
		projectLink: "/projects/energy/kambilombilo", // Add project link
	},
]

export default function EnergyProjectsPage() {
	return (
		<div className="container mx-auto px-4 py-12 mt-16">
			<h1 className={`${glancyNeue.className} text-4xl font-bold mb-8`}>
				Energy Projects
			</h1>
			<p className="text-xl mb-8">
				Sustainable energy and power distribution projects.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{energyProjects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</div>
	)
}
