"use client"
import { motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"
import React from "react"

const OurServices = () => {
	return (
		<div className="p-4 md:py-20 bg-slate-100 space-y-6">
			<h1 className="text-center font-bold text-4xl">Our Services</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
				<Card
					heading="Electrical Engineering"
					description="We provide comprehensive electrical engineering solutions, including system design, installation, maintenance, and troubleshooting."
					imgSrc="/projects/chinyingi/6.jpeg"
				/>
				<Card
					heading="Water Engineering"
					description="Designing and managing water systems, including dams, pipelines, and irrigation, to ensure efficient water use and sustainability."
					imgSrc="/projects/dam/9.jpeg"
				/>
				<Card
					heading="Building Construction"
					description="Residential, commercial buildings, renovations, township
								infrastructure"
					imgSrc="/projects/double-storey-waterfalls/12.jpeg"
				/>
				<Card
					heading="Solar Solutions"
					description="Solar mini-grids, battery energy storage systems, off-grid
								solutions"
					imgSrc="/projects/solar/1.jpg"
				/>
			</div>
		</div>
	)
}

const Card = ({
	heading,
	description,
	imgSrc,
}: {
	heading: string
	description: string
	imgSrc: string
}) => {
	return (
		<motion.div
			transition={{
				staggerChildren: 0.035,
			}}
			whileHover="hover"
			className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative">
			<div
				className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
				style={{
					backgroundImage: `url(${imgSrc})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
				<FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
				<div>
					<h4>
						{heading.split("").map((l, i) => (
							<ShiftLetter letter={l} key={i} />
						))}
					</h4>
					<p>{description}</p>
				</div>
			</div>
		</motion.div>
	)
}

const ShiftLetter = ({ letter }: { letter: string }) => {
	return (
		<div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
			<motion.span
				className="flex flex-col min-w-[4px]"
				style={{
					y: "0%",
				}}
				variants={{
					hover: {
						y: "-50%",
					},
				}}
				transition={{
					duration: 0.5,
				}}>
				<span>{letter}</span>
				<span>{letter}</span>
			</motion.span>
		</div>
	)
}

export default OurServices
