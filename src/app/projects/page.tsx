import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import localFont from 'next/font/local'

const glancyNeue = localFont({
	src: '../fonts/GlancyrNeue-VF.otf',
	variable: '--font-glancy-neue',
	weight: '100 900',
})

export default function ProjectsPage() {
	const projects = [
		{
			title: 'Zambian Road Network Expansion',
			description:
				'A large-scale project to improve connectivity across Zambia through the construction of new roads and bridges.',
			category: 'Infrastructure',
		},
		{
			title: 'Kenyan Solar Farm',
			description:
				'Development of a 50MW solar farm to provide clean energy to rural communities in Kenya.',
			category: 'Energy',
		},
		{
			title: 'South African Shopping Mall Complex',
			description:
				'Design and construction of a modern shopping mall complex in Johannesburg, including parking facilities and green spaces.',
			category: 'Commercial',
		},
		{
			title: 'Zambian Agricultural Development',
			description:
				'Implementation of advanced irrigation systems and sustainable farming practices to boost agricultural productivity in Zambia.',
			category: 'Agriculture',
		},
		{
			title: 'East African Pharmaceutical Distribution Network',
			description:
				'Establishment of a comprehensive distribution network for pharmaceuticals across East Africa, improving access to essential medicines.',
			category: 'Healthcare',
		},
		{
			title: 'Dubai Logistics Hub',
			description:
				'Creation of a state-of-the-art logistics hub in Dubai to facilitate international trade and transportation.',
			category: 'Logistics',
		},
	]

	return (
		<div className="container mx-auto px-4 py-12 mt-16">
			<h1
				className={`${glancyNeue.className} text-4xl font-bold mb-8 text-center`}>
				Our Projects
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project, index) => (
					<Card key={index}>
						<CardHeader>
							<CardTitle className={`${glancyNeue.className} text-xl`}>
								{project.title}
							</CardTitle>
							<Badge>{project.category}</Badge>
						</CardHeader>
						<CardContent>
							<p>{project.description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
