"use client"
import { motion, MotionConfig } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"
import { twMerge } from "tailwind-merge"
import React from "react"

const SolarOffGrid = () => {
	return (
		<div className="min-h-screen mt-20">
			<div
				className="min-h-[40vh] "
				style={{
					backgroundImage: "url('/images/solar.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}></div>
			<div className="container w-5/6 mx-auto mt-20">
				<div className="space-y-4">
					<h1 className="uppercase text-kdw text-2xl md:text-4xl font-bold">
						TURNKEY SOLAR & OFF-GRID SOLUTIONS
					</h1>
					<p className="max-w-6xl">
						With the growing demand for renewable
						energy, KDW Engineering is at the forefront
						of providing sustainable energy solutions.
						We specialize in *turnkey solar off-grid
						systems* for both rural electrification and
						urban energy independence. Our services
						cater to various sectors, offering complete
						solutions that integrate solar energy into
						communities, businesses, and households.
					</p>
				</div>

				<p className="text-xl font-semibold my-10">Key services include:</p>

				<div className="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-3 mt-10">
					<Card
						className="text-white"
						title="Solar Mini-Grids:"
						subtitle="We offer the supply, installation, and commissioning of solar-powered mini-grids for remote communities and industrial complexes. These systems provide reliable, decentralized power without the need for extensive transmission infrastructure, contributing to rural development and energy access."
					/>
					<Card
						className="text-white"
						title="Solar Backup Systems for Households and Commercial Use:"
						subtitle="We provide consultancy, design, and installation of solar backup systems tailored for residential and commercial buildings. Our solutions ensure uninterrupted power during grid outages and help reduce reliance on traditional power sources, ultimately cutting energy costs."
					/>
					<Card
						className="text-white"
						title="Battery Energy Storage Systems (BESS):"
						subtitle="Our solar systems are integrated with advanced battery storage solutions to store excess energy, ensuring reliable and continuous power supply even when solar production is low."
					/>
				</div>

				<div className="space-y-4 my-16">
					<p className="max-w-6xl">
						KDW’s solar solutions are designed to offer
						energy security, reduce carbon footprints,
						and provide cost-effective, long-term
						power alternatives, especially for areas
						with unreliable grid access.
					</p>
				</div>

				<div className="space-y-4 my-12">
					<h1 className="uppercase text-kdw text-2xl md:text-3xl font-bold">
						Cabling
					</h1>
					<p className="max-w-6xl">
						KDW handles extensive cabling projects, laying
						hundreds of kilometers of Low Voltage (LV)
						to High Voltage (HV) cables. Our expertise
						includes:
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10">
					<div className="space-y-4 py-4 px-4">
						<h3 className="text-xl font-semibold">
							Cable Laying:
						</h3>
						<p>
							From trenching to laying and installation,
							we handle all aspects of underground and
							overhead cabling.
						</p>
						<h3 className="text-xl font-semibold">
							Cable Terminations and Jointing:
						</h3>
						<p>
							We specialize in terminating and jointing cables
							for a variety of applications, ensuring secure
							connections and system integrity.
						</p>
						<h3 className="text-xl font-semibold">
							Thrust Boring:
						</h3>
						<p>
							We employ advanced techniques such as
							thrust boring to install underground cables
							with minimal surface disruption, ideal for urban
							environments.
						</p>
					</div>
					<div
						style={{
							backgroundImage: "url('/images/landing/solar.jpeg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
						className="h-full min-h-[40vh]   rounded-xl"></div>
				</div>

				<div className="space-y-4 my-12">
					<h1 className="uppercase text-kdw text-2xl md:text-3xl font-bold">
						ELECTRICAL SUPPLIES
					</h1>
					<p className="max-w-6xl">
						KDW is a trusted provider of electrical
						equipment and systems, offering a complete
						range of supplies for overhead lines,
						switchgear, and more. Our products include:
					</p>
				</div>

				<div className="grid grid-cols-1 my-20 md:grid-cols-2 w-full gap-10">
					<div
						style={{
							backgroundImage: "url('/images/electrical-1.jpg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
						className="h-full min-h-[40vh]   rounded-xl"></div>

					<div className="space-y-4 py-4 px-4">
						<h3 className="text-xl font-semibold">
							Transformers and Distribution
							Equipment:
						</h3>
						<p>
							We supply pole-mounted and ground-mounted
							transformers, as well as associated equipment
							like fuses, conductors, and stay wires.
						</p>
						<h3 className="text-xl font-semibold">
							Switchgear and Circuit Protection:
						</h3>
						<p>
							Our offerings include molded case circuit
							breakers (MCCBs), resistive circuit breakers
							(RCBs), mains circuit breakers (MCBs), and
							motor protection circuit breakers from top
							brands such as Siemens, Schneider Electric,
							and Legrand.
						</p>
						<h3 className="text-xl font-semibold">
							Lighting Solutions:
						</h3>
						<p>
							We provide lighting systems for industrial,
							commercial, and residential applications,
							featuring products from leading brands like
							Philips and Osram.
						</p>
					</div>

				</div>
			</div>
		</div>
	)
}

export default SolarOffGrid

const Card = ({
	title,
	subtitle,
	className,
}: {
	title: string
	subtitle: string
	className?: string
}) => {
	return (
		<MotionConfig
			transition={{
				type: "spring",
				bounce: 0.5,
			}}>
			<motion.div
				whileHover="hovered"
				className={twMerge(
					"group w-full border-2 border-black bg-kdw",
					className,
				)}>
				<motion.div
					initial={{
						x: 0,
						y: 0,
					}}
					variants={{
						hovered: {
							x: -8,
							y: -8,
						},
					}}
					className={twMerge("-m-0.5 border-2 border-black bg-kdw", className)}>
					<motion.div
						initial={{
							x: 0,
							y: 0,
						}}
						variants={{
							hovered: {
								x: -8,
								y: -8,
							},
						}}
						className={twMerge(
							"relative -m-0.5 flex h-72 flex-col justify-between overflow-hidden border-2 border-black bg-kdw p-8",
							className,
						)}>
						<p className="flex items-center text-lg font-medium uppercase">
							<FiArrowRight className="-ml-8 mr-2 opacity-0 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:opacity-100" />
							{title}
						</p>
						<div>
							<p className="transition-[margin] duration-300 ease-in-out group-hover:mb-10 text-sm">
								{subtitle}
							</p>
							<button className="absolute bottom-2 left-2 right-2 translate-y-full border-2 border-black bg-white px-4 py-2 text-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
								CONTACT US
							</button>
						</div>

						<motion.svg
							initial={{ rotate: 0 }}
							animate={{ rotate: 360 }}
							transition={{
								duration: 25,
								repeat: Infinity,
								repeatType: "loop",
								ease: "linear",
							}}
							style={{
								top: "0",
								right: "0",
								x: "50%",
								y: "-50%",
								scale: 0.75,
							}}
							width="200"
							height="200"
							className="pointer-events-none absolute z-10 rounded-full">
							<path
								id="circlePath"
								d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
								fill="none"
							/>
							<text>
								<textPath
									href="#circlePath"
									fill="black"
									className="fill-black text-xl font-black uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
									CONTACT US • CONTACT US • CONTACT US • CONTACT US •
								</textPath>
							</text>
						</motion.svg>
					</motion.div>
				</motion.div>
			</motion.div>
		</MotionConfig>
	)
}
