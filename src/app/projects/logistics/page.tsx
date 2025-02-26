import { ProjectCard } from '@/components/project-card'

const logisticsProjects = [
	{
		title: 'East African Railway Corridor',
		description:
			'Development of a railway corridor connecting East African countries for efficient freight transportation.',
		imageUrl: '/images/image1.jpg',
		category: 'Rail Freight',
		projectLink: '/projects/east-african-railway-corridor', // Example project link
	},
	{
		title: 'Mombasa Port Automation',
		description:
			'Implementation of advanced automation systems at the Port of Mombasa to increase efficiency and reduce turnaround times.',
		imageUrl: '/images/image2.jpg',
		category: 'Port Operations',
		projectLink: '/projects/mombasa-port-automation', // Example project link
	},
	{
		title: 'Pan-African Trucking Network',
		description:
			'Establishment of a coordinated trucking network across multiple African countries, optimizing routes and reducing costs.',
		imageUrl: '/images/image3.jpg',
		category: 'Road Freight',
		projectLink: '/projects/pan-african-trucking-network', // Example project link
	},
	{
		title: 'Johannesburg E-commerce Fulfillment Center',
		description:
			'Construction of a state-of-the-art e-commerce fulfillment center in Johannesburg, featuring advanced sorting and distribution systems.',
		imageUrl: '/images/image4.jpg',
		category: 'Warehousing',
		projectLink: '/projects/johannesburg-fulfillment-center', // Example project link
	},
]

export default function LogisticsProjectsPage() {
	return (
		<div className="container mx-auto px-4 py-12 mt-16">
			<h1 className="text-4xl font-bold mb-8">Logistics Projects</h1>
			<p className="text-xl mb-8">
				Transportation and supply chain optimization projects.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{logisticsProjects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</div>
	)
}
