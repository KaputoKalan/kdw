import { ProjectCard } from '@/components/project-card'
import localFont from 'next/font/local'

const glancyNeue = localFont({
	src: '../../fonts/GlancyrNeue-VF.otf',
	variable: '--font-glancy-neue',
	weight: '100 900',
})

const commercialProjects = [
	{
		title: 'Accra Financial District',
		description:
			'Development of a modern financial district in Accra, Ghana, featuring high-rise office buildings and commercial spaces.',
		imageUrl: '/images/image1.jpg',
		category: 'Office',
		projectLink: '/projects/accra-financial-district', // Add project link
	},
	{
		title: 'Cape Town Waterfront Mall',
		description:
			'Construction of a large-scale shopping mall at the Cape Town waterfront, combining retail, dining, and entertainment.',
		imageUrl: '/images/image2.jpg',
		category: 'Retail',
		projectLink: '/projects/cape-town-waterfront-mall', // Add project link
	},
	{
		title: 'Lagos Tech Park',
		description:
			'Creation of a technology park in Lagos, Nigeria, providing state-of-the-art facilities for tech companies and startups.',
		imageUrl: '/images/image3.jpg',
		category: 'Mixed-Use',
		projectLink: '/projects/lagos-tech-park', // Add project link
	},
	{
		title: 'Kigali Convention Center',
		description:
			'Design and construction of a modern convention center in Kigali, Rwanda, to host international events and conferences.',
		imageUrl: '/images/image4.jpg',
		category: 'Hospitality',
		projectLink: '/projects/kigali-convention-center', // Add project link
	},
]

export default function CommercialProjectsPage() {
	return (
		<div className="container mx-auto px-4 py-12 mt-16">
			<h1 className={`${glancyNeue.className} text-4xl font-bold mb-8`}>
				Commercial Projects
			</h1>
			<p className="text-xl mb-8">
				Shopping malls and commercial building developments.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{commercialProjects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</div>
	)
}
