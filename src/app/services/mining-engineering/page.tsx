import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CustomCard from "@/components/ui/custom-card"
import Image from "next/image"

export default function MiningEngineeringPage() {
	return (
		<div className="container mx-auto px-4 py-12 mt-16">
			<h1 className="text-4xl font-bold mb-8">Mining Engineering Services</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
				<div className="md:mt-10">
					<p className="text-lg mb-4">
						KDW Global&apos;s Mining Engineering services focus on providing
						innovative and sustainable solutions for the extraction of valuable
						minerals, metals, and other geological materials from the Earth.
					</p>
					<p className="text-lg">
						Our team of experienced mining engineers combines cutting-edge
						technology with environmentally responsible practices to optimize
						mining operations, ensuring safety, efficiency, and minimal
						environmental impact.
					</p>
				</div>
				<div className="relative h-[30vh] ">
					<Image
						src="/images/image3.jpg"
						alt="Mining Engineering Project"
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
			</div>

			<Card className="mb-8">
				<CardHeader>
					<CardTitle>Our Expertise</CardTitle>
				</CardHeader>
				<CardContent>
					<ul className="list-disc pl-5 space-y-2">
						<li>Mine Design and Planning</li>
						<li>Mineral Exploration and Evaluation</li>
						<li>Underground and Surface Mining Techniques</li>
						<li>Mine Ventilation and Safety Systems</li>
						<li>Mineral Processing and Beneficiation</li>
						<li>Environmental Impact Assessment and Mitigation</li>
					</ul>
				</CardContent>
			</Card>

			<h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<CustomCard
					small
					title="Complete refurbishment of Keestrack 1800 Explorer Deck Screen for Coal Plant"
					subtitle="Our team successfully completed the refurbishment of the Keestrack 1800 Explorer Deck Screen, ensuring optimal performance and efficiency for  the coal plant"
					href="/projects/mining/refurbishment-coal-plant"
				/>
				<CustomCard
					small
					title="Fabrication and Installation of 4 Dilute Tanks for Mining Operation"
					subtitle="Our team expertly designed, fabricated, and installed four state-of-the-art dilute tanks tailored to the specific needs of a large-scale mining operation. "
					href="/projects/mining/fabrication-installation"
				/>

				{/* <CustomCard
					small
					title="Botswana Diamond Mine Ventilation"
					subtitle="Design and installation of a state-of-the-art ventilation system
							for a large diamond mine in Botswana, enhancing worker safety and
							productivity."
					href="#"
				/> */}
			</div>
		</div>
	)
}
