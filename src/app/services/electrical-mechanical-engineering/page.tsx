import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CustomCard from "@/components/ui/custom-card"
import Image from "next/image"

export default function ElectricalMechanicalEngineeringPage() {
	return (
		<div className="container mx-auto px-4 py-12 mt-16">
			<h1 className="text-4xl font-bold mb-8">
				Electrical & Mechanical Engineering Services
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
				<div className="md:mt-10">
					<p className="text-lg mb-4">
						KDW Engineering excels in delivering comprehensive electrical
						solutions, offering turnkey projects from initial concept to final
						commissioning. Our expertise spans a wide range of electrical
						systems, from High Tension (HT) to Low Tension (LT) installations,
						and includes critical infrastructure such as power distribution
						lines, substations, and switching stations. We pride ourselves on
						ensuring that our projects meet the highest standards of quality,
						efficiency, and sustainability.
					</p>
					<p className="text-lg">
						We specialize in creating integrated solutions that optimize energy
						usage, enhance comfort, and improve overall building performance.
						Our services cover everything from initial design to installation
						and maintenance.
					</p>
				</div>
				<div className="relative h-[30vh] ">
					<Image
						src="/images/image2.jpg"
						alt="Electrical & Mechanical Engineering Project"
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
			</div>

			<Card className="mb-8">
				<CardHeader>
					<CardTitle>
						Our Turnkey Electrical Engineering services include:
					</CardTitle>
				</CardHeader>
				<CardContent>
					<ul className="list-disc pl-5 space-y-2">
						<li className="max-w-4xl">
							<strong>Design, Engineering, and Planning:</strong> We provide
							tailored design solutions, ensuring that every project meets the
							specific needs of our clients while adhering to international
							safety and operational standards.
						</li>
						<li className="max-w-4xl">
							<strong> Procurement and Project Management:</strong>
							Sourcing from trusted global manufacturers, we manage procurement
							and logistics with precision to ensure timely delivery of
							high-quality materials.
						</li>
						<li className="max-w-4xl">
							<strong>Construction, Erection, and Commissioning:</strong>
							From the construction of electrical systems to the final
							commissioning and testing of installations, we ensure that every
							system operates reliably and efficiently.
						</li>
						<li className="max-w-4xl">
							<strong> Maintenance and Upgrades:</strong>
							We offer continuous support and system upgrades to extend the
							lifespan of electrical infrastructure and reduce downtime for
							critical installations.
						</li>
					</ul>
				</CardContent>
			</Card>

			<h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<CustomCard
					small
					title="Lagos Smart Office Tower"
					subtitle="State-of-the-art office building in Lagos, Nigeria, featuring
							advanced building automation and energy management systems."
					href="#"
				/>
				<CustomCard
					small
					title="Nairobi Green Hospital"
					subtitle="Eco-friendly hospital in Nairobi, Kenya, with innovative
							mechanical systems for optimal energy efficiency and patient
							comfort."
					href="#"
				/>
				<CustomCard
					small
					title="Cairo Metro Electrification"
					subtitle="Comprehensive electrical engineering project for Cairo's
							expanding metro system, enhancing urban mobility."
					href="#"
				/>
			</div>
		</div>
	)
}
