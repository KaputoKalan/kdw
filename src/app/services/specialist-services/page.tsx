import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CustomCard from '@/components/ui/custom-card'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export default function SpecialistServicesPage() {
	return (
		<div className="min-h-screen mt-20">
			<div
				className="min-h-[30vh] "
				style={{
					backgroundImage: "url('/images/image1.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}></div>
			<div className="container mx-auto px-4 py-12 mt-16">
				<h1 className="uppercase text-4xl text-kdw font-bold mb-8">
					Specialist Engineering Services
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
					<div className="md:mt-10">
						<p className="text-lg mb-4">
							KDW Global offers a range of Specialist Engineering Services to meet
							the unique and complex needs of various industries. Our team of
							highly skilled engineers brings expertise in niche areas to provide
							tailored solutions for challenging projects.
						</p>
						<p className="text-lg">
							We pride ourselves on our ability to tackle unconventional
							engineering challenges, combining innovative thinking with technical
							excellence to deliver outstanding results in specialized fields.
						</p>
					</div>
					<div className="relative h-[30vh] ">
						<Image
							src="/images/image4.jpg"
							alt="Specialist Engineering Project"
							layout="fill"
							objectFit="cover"
							className="rounded-lg"
						/>
					</div>
				</div>

				{/* <Card className="mb-8">
					<CardHeader>
						<CardTitle>Our Specialist Services</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="list-disc pl-5 space-y-2">
							<li>Geotechnical Engineering</li>
							<li>Coastal and Marine Engineering</li>
							<li>Environmental Engineering</li>
							<li>Acoustics and Vibration Control</li>
							<li>Facade Engineering</li>
							<li>Renewable Energy Systems Design</li>
						</ul>
					</CardContent>
				</Card> */}

				<div className="max-w-3xl my-10 p-6 shadow-full">
					<div className="mb-4">
						<p className="text-lg font-semibold text-gray-800">
						Our Specialist Services
						</p>
					</div>
					<ol className="space-y-4 px-4">
						{[
							"Geotechnical Engineering",
							"Coastal and Marine Engineering",
							"Environmental Engineering",
							"Acoustics and Vibration Control",
							"Facade Engineering",
							"Renewable Energy Systems Design",
						].map((item, index) => (
							<li
								key={index}
								className="flex items-center gap-4 p-2 transition-all"
							>
								<CheckCircle className="text-kdw w-6 h-6 flex-shrink-0" />
								<span className="text-gray-700 font-medium">{item}</span>
							</li>
						))}
					</ol>
				</div>

				<h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<CustomCard
						small
						title="Mombasa Port Expansion"
						subtitle="Specialized coastal engineering for the expansion of Mombasa Port,
							Kenya, including advanced breakwater design and dredging
							solutions."
						href="#"
					/>
					<CustomCard
						small
						title="Cairo Opera House Acoustics"
						subtitle="Acoustic engineering for the renovation of Cairo Opera House,
							Egypt, enhancing sound quality and audience experience."
						href="#"
					/>
					<CustomCard
						small
						title="Johannesburg Green Building"
						subtitle="Comprehensive environmental and renewable energy systems design
							for a cutting-edge green office building in Johannesburg, South
							Africa."
						href="#"
					/>
				</div>
			</div>
		</div>
	)
}
