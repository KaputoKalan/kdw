import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CustomCard from "@/components/ui/custom-card"
import Image from "next/image"

// export default function BuildingConstructionPage() {
// 	return (
// 		<div className="w-5/6 mx-auto px-4 py-12 mt-16">
// 			<h1 className="text-4xl font-bold mb-8">
// 				Building Construction Services
// 			</h1>

// 			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
// 				<div className="md:mt-10">
// 					<p className="text-lg mb-4">
// 						KDW Global offers comprehensive building construction services for
// 						both residential and commercial projects. Our team of skilled
// 						professionals ensures the highest quality standards from concept to
// 						completion.
// 					</p>
// 					<p className="text-lg">
// 						We specialize in creating structures that are not only aesthetically
// 						pleasing but also functional, energy-efficient, and built to last.
// 						Our approach integrates modern construction techniques with
// 						sustainable practices.
// 					</p>
// 				</div>
// 				<div className="relative h-[30vh] ">
// 					<Image
// 						src="/images/image1.jpg"
// 						alt="Building Construction Project"
// 						layout="fill"
// 						objectFit="cover"
// 						className="rounded-lg"
// 					/>
// 				</div>
// 			</div>

// 			<Card className="mb-8">
// 				<CardHeader>
// 					<CardTitle>Our Services</CardTitle>
// 				</CardHeader>
// 				<CardContent>
// 					<ul className="list-disc pl-5 space-y-2">
// 						<li>Residential Construction</li>
// 						<li>Commercial Building Development</li>
// 						<li>Industrial Facility Construction</li>
// 						<li>Renovation and Remodeling</li>
// 						<li>Green Building and Sustainable Construction</li>
// 						<li>Project Management and Consulting</li>
// 					</ul>
// 				</CardContent>
// 			</Card>

// 			<h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
// 			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// 				<CustomCard
// 					small
// 					title="Accra Business Park"
// 					subtitle="A modern, multi-use business park in Accra, Ghana, featuring
// 							office spaces, retail areas, and recreational facilities."
// 					href="#"
// 				/>
// 				<CustomCard
// 					small
// 					title="Nairobi Residential Complex"
// 					subtitle="Luxury residential complex in Nairobi, Kenya, combining
// 							contemporary design with sustainable living practices.."
// 					href="#"
// 				/>
// 				<CustomCard
// 					small
// 					title="Cape Town Waterfront Hotel"
// 					subtitle="Five-star hotel on Cape Town's waterfront, showcasing our
// 							expertise in high-end hospitality construction."
// 					href="#"
// 				/>
// 			</div>
// 		</div>
// 	)
// }

import React from "react"
import { CheckCircle } from "lucide-react";

const BuildingConstructionPage = () => {
	return (
		<div className="min-h-screen mt-20">
			<div
				className="min-h-[30vh] "
				style={{
					backgroundImage: "url('/images/landing/foundation.jpeg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}></div>

			<div className="container w-5/6 mx-auto my-20">
				<div className="space-y-10">
					<h1 className="uppercase text-kdw text-2xl md:text-4xl font-bold">
						Building Construction Services
					</h1>
					<p className="max-w-5xl text-lg">
						KDW Global offers comprehensive building construction services for
						both residential and commercial projects. Our team of skilled
						professionals ensures the highest quality standards from concept to
						completion.
					</p>
					<p className="text-lg max-w-5xl">
						We specialize in creating structures that are not only aesthetically
						pleasing but also functional, energy-efficient, and built to last.
						Our approach integrates modern construction techniques with
						sustainable practices.
					</p>
				</div>
				<div className="my-10">
					<p className="text-lg font-semibold max-w-5xl">
						Services provided under building and construction include:
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4 max-w-full">
						{/* Left Column - List of Services */}
						<div>
							<ol className="my-6 px-2">
								{[
									"Design & Construction of Residential, Public, and Commercial Buildings",
									"Building Maintenance, Renovations, and Alterations",
									"Landscaping Works",
									"Township Development and Infrastructure",
									"Aluminium Finishes, Claddings, Windows, Doors, and Shop Fronts",
									"Roofing, Plumbing, and Electrical Works",
									"Modern Kitchen Upgrades and Installations",
								].map((item, index) => (
									<li key={index} className="flex items-center gap-3 p-4">
										<CheckCircle className="text-kdw w-6 h-6" />
										<span>{item}</span>
									</li>
								))}
							</ol>
						</div>

						{/* Right Column - Image Grid */}
						<div className="grid grid-cols-2 gap-4">
							{["image5.jpg", "image7.jpg", "image3.jpg", "building.jpg"].map((img, index) => (
								<div key={index} className="relative h-50 overflow-hidden shadow-md">
									<Image src={`/images/${img}`} alt={`Service Image ${index + 1}`} layout="fill" objectFit="cover" />
								</div>
							))}
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default BuildingConstructionPage
