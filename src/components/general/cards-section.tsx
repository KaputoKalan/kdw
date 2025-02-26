"use client"
import Image from "next/image"
import React from "react"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import localFont from "next/font/local"

const glancyNeue = localFont({
	src: "../../app/fonts/GlancyrNeue-VF.otf",
	variable: "--font-glancy-neue",
	weight: "100 900",
})

export function AppleCardsCarousel() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	))

	return (
		<div className="w-full h-full py-20 pl-0 md:pl-20">
			<h2
				className={`max-w-7xl pl-4  text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans1 ${glancyNeue.className}`}>
				Discover Our Landmark Projects
			</h2>
			<Carousel items={cards} />
		</div>
	)
}

const ProjectContent = ({
	title,
	description,
	imageUrl,
}: {
	title: string
	description: string
	imageUrl: string
}) => {
	return (
		<div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
			<p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl ">
				<span className="font-bold text-neutral-700 dark:text-neutral-200">
					{title}
				</span>{" "}
				{description}
			</p>
			<Image
				src={imageUrl}
				alt={title}
				height={500}
				width={500}
				className="md:w-1/2 md:h-1/2 h-full w-full  object-cover rounded-lg"
			/>
		</div>
	)
}

const data = [
	{
		category: "Infrastructure",
		title: "Zambian Highway Network",
		src: "/images/landing/road.jpeg?height=500&width=500",
		content: (
			<ProjectContent
				title="Zambian Highway Network"
				description="A comprehensive highway system connecting major cities across Zambia, improving transportation and boosting economic growth. This project showcases our expertise in large-scale infrastructure development and our commitment to enhancing connectivity across the African continent."
				imageUrl="/images/landing/road.jpeg?height=500&width=500"
			/>
		),
	},
	{
		category: "Energy",
		title: "Kasanjiku Distribution Network Expansion",
		src: "/projects/Kasanjiku/2.jpeg?height=500&width=500",
		content: (
			<ProjectContent
				title="Kasanjiku Distribution Network Expansion"
				description="	The Kasanjiku Distribution Network Expansion project aims to improve
					the region's access to reliable electricity by upgrading existing
					infrastructure and extending power lines to underserved areas. This
					initiative will enhance energy distribution, reduce power outages, and
					promote economic growth by supporting local businesses and
					communities. With an increased capacity and modernized systems, the
					expansion is set to meet the growing demand for electricity and
					improve the quality of life for residents."
				imageUrl="/projects/Kasanjiku/2.jpeg?height=500&width=500"
			/>
		),
	},
	{
		category: "Mining",
		title: "Fabrication and Installation of Dilute Tanks",
		src: "/projects/coal-plant/4.jpeg?height=500&width=500",
		content: (
			<ProjectContent
				title="South African Gold Mine Optimization"
				description="Implementation of advanced mining techniques and automation systems to improve efficiency and safety in a deep gold mine in South Africa. This project highlights our expertise in mining engineering and our commitment to enhancing productivity while prioritizing worker safety."
				imageUrl="/projects/coal-plant/4.jpeg?height=500&width=500"
			/>
		),
	},
	{
		category: "Water Engineering",
		title: "Luin'ga Dam Project",
		src: "/projects/dam/2.jpeg??height=800&width=1200",

		content: (
			<ProjectContent
				title="Luin'ga Dam Project"
				description="The Luin'ga Dam Project aims to provide a sustainable water source for irrigation, livestock, and domestic use in the surrounding communities. This initiative involves the construction of a dam, water distribution systems, and capacity-building programs to ensure long-term water resource management and agricultural productivity."
				imageUrl="/projects/dam/2.jpeg?height=500&width=500"
			/>
		),
	},

	{
		category: "Logistics",
		title: "East African Railway Corridor",
		src: "/images/railway.jpg?height=500&width=500",
		content: (
			<ProjectContent
				title="East African Railway Corridor"
				description="Development of a railway corridor connecting East African countries for efficient freight transportation. This project demonstrates our capability in creating large-scale transportation infrastructure that facilitates regional trade and economic integration."
				imageUrl="/images/railway.jpg?height=500&width=500"
			/>
		),
	},
	{
		category: "Healthcare",
		title: "Nairobi Green Hospital",
		src: "/images/hospital.jpg?height=500&width=500",
		content: (
			<ProjectContent
				title="Nairobi Green Hospital"
				description="Design and construction of an eco-friendly hospital in Nairobi, Kenya, with innovative mechanical systems for optimal energy efficiency and patient comfort. This project showcases our expertise in sustainable building design and our commitment to creating healthcare facilities that prioritize both environmental responsibility and patient care."
				imageUrl="/images/hospital.jpg?height=500&width=500"
			/>
		),
	},
]
