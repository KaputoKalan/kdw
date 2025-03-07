import CustomCard from "@/components/ui/custom-card"
import Image from "next/image"
import { CheckCircle } from "lucide-react";

export default function MiningEngineeringPage() {
	return (
		<div className="min-h-screen mt-20">
			<div
				className="min-h-[40vh] "
				style={{
					backgroundImage: "url('/images/image4.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}></div>
			<div className="container mx-auto px-4 py-12 mt-16">
				<h1 className="uppercase text-4xl text-kdw font-bold mb-8">Mining Engineering Services</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
					{/* Text Content */}
					<div className="md:mt-10 md:pe-6">
						<p className="text-lg text-gray-800 leading-relaxed mb-4">
							<strong>KDW Global&apos;s Mining Engineering</strong> services focus on providing
							innovative and sustainable solutions for the extraction of valuable
							minerals, metals, and other geological materials from the Earth.
						</p>
						<p className="text-lg text-gray-700 leading-relaxed">
							Our team of experienced mining engineers combines cutting-edge
							technology with environmentally responsible practices to optimize
							mining operations, ensuring safety, efficiency, and minimal
							environmental impact.
						</p>
					</div>

					{/* Image Section */}
					<div className="relative h-[40vh] w-[40vw] rounded-lg overflow-hidden shadow-lg">
						<Image
							src="/images/mine.jpg"
							alt="Mining Engineering Project"
							layout="fill"
							objectFit="cover"
							className="rounded-lg"
						/>
					</div>
				</div>

				<div className="max-w-3xl my-10 p-6 shadow-full">
					<div className="mb-4">
						<p className="text-lg font-semibold text-gray-800">
							KDW provides superior, full-fledged building construction services, delivering high-quality
							results for local and international clients:
						</p>
					</div>
					<ol className="space-y-4 px-4">
						{[
							"Mine Design and Planning",
							"Mineral Exploration and Evaluation",
							"Underground and Surface Mining Techniques",
							"Mine Ventilation and Safety Systems",
							"Mineral Processing and Beneficiation",
							"Environmental Impact Assessment and Mitigation",
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
		</div>
	)
}
