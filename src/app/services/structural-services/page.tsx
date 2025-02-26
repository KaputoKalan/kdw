import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CustomCard from '@/components/ui/custom-card'
import Image from 'next/image'

export default function StructuralServicesPage() {
	return (
		<div className="container mx-auto px-4 py-12 mt-16">
			<h1 className="text-4xl font-bold mb-8">
				Structural Engineering Services
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
				<div className="md:mt-10">
					<p className="text-lg mb-4">
						KDW Global&apos;s Structural Engineering services focus on ensuring
						the safety, stability, and efficiency of buildings and
						infrastructure projects. Our team of expert structural engineers
						combines innovative design with rigorous analysis to create
						structures that are both aesthetically pleasing and structurally
						sound.
					</p>
					<p className="text-lg">
						We provide comprehensive structural solutions for a wide range of
						projects, from high-rise buildings to bridges, industrial
						facilities, and special structures. Our approach integrates advanced
						computational tools with practical engineering expertise to deliver
						optimal results.
					</p>
				</div>
				<div className="relative h-[30vh] ">
					<Image
						src="/images/image5.jpg"
						alt="Structural Engineering Project"
						layout="fill"
						objectFit="cover"
						className="rounded-lg object-cover"
					/>
				</div>
			</div>

			<Card className="mb-8">
				<CardHeader>
					<CardTitle>Our Services</CardTitle>
				</CardHeader>
				<CardContent>
					<ul className="list-disc pl-5 space-y-2">
						<li>Structural Design and Analysis</li>
						<li>Seismic Engineering and Retrofitting</li>
						<li>Building Information Modeling (BIM)</li>
						<li>Structural Integrity Assessments</li>
						<li>Foundation Design</li>
						<li>Construction Engineering and Support</li>
					</ul>
				</CardContent>
			</Card>

			<h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<CustomCard
					small
					title="Nairobi Skyscraper"
					subtitle="Design and structural engineering for a 50-story mixed-use
							skyscraper in Nairobi, Kenya, incorporating advanced seismic
							resistance techniques."
					href="#"
				/>
				<CustomCard
					small
					title="Cape Town Cable-Stayed Bridge"
					subtitle="Structural design and engineering for a landmark cable-stayed
							bridge in Cape Town, South Africa, spanning a major waterway and
							enhancing urban connectivity."
					href="#"
				/>

				<CustomCard
					small
					title="Lagos Industrial Complex"
					subtitle="Comprehensive structural engineering for a large-scale industrial
							complex in Lagos, Nigeria, featuring innovative pre-fabricated
							structural elements for rapid construction.."
					href="#"
				/>
			</div>
		</div>
	)
}
