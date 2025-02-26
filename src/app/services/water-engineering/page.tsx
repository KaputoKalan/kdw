"use client"
import { twMerge } from "tailwind-merge"
import { MotionConfig, motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"
import React from "react"

const WaterEngineering = () => {
	return (
		<div className="min-h-screen mt-20">
			<div
				className="min-h-[30vh] "
				style={{
					backgroundImage: "url('/images/dam-2.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}></div>
			<div className="container w-5/6 mx-auto mt-20">
				<div className="space-y-4">
					<h1 className="uppercase text-kdw text-2xl md:text-4xl font-bold">
						Water Engineering
					</h1>
					<p className="max-w-6xl">
						KDW Engineering brings innovative solutions to water resource
						management, delivering reliable and efficient water infrastructure
						across Zambia. From water supply systems to wastewater treatment, we
						ensure that our designs meet the demands of modern urban and rural
						communities.
					</p>
				</div>
				<p className="text-xl font-semibold mt-10">Key services include:</p>
				<div className="grid  grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 mt-10">
					<Card
						className="text-white"
						title="Booster and Pump Station Design and Installation:"
						subtitle="Our expertise includes the design and installation of booster and pump stations to regulate water flow and pressure, ensuring consistent water distribution."
					/>
					<Card
						className="text-white"
						title="Transmission and Collection Systems:"
						subtitle="We design and install transmission lines and collection systems for both water supply and wastewater management."
					/>
					<Card
						className="text-white"
						title="Inflow and Infiltration Systems:"
						subtitle="KDW engineers develop systems to control inflow and infiltration, protecting water treatment facilities and reducing operating costs."
					/>
					<Card
						className="text-white"
						title="Subsurface Utility Engineering:"
						subtitle="We ensure that all underground utilities are installed and maintained with precision, reducing the risk of interference and damage to existing systems."
					/>
				</div>
				<div className="space-y-4 my-20">
					<h1 className="uppercase text-kdw text-2xl md:text-3xl font-bold">
						EARTH DAM CONSTRUCTION
					</h1>
					<p className="max-w-6xl">
						KDW Engineering leverages advanced methodologies to construct
						durable and efficient earth dams, essential for water retention,
						irrigation, and flood control in agricultural and industrial
						settings. Our capabilities include:
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10">
					<div className="space-y-4 py-10 px-4">
						<h3 className="text-xl font-semibold">
							Motor Scraper and Bulldozer Methodology:
						</h3>
						<p>
							We utilize modern earthmoving techniques such as motor scrapers
							combined with bulldozers to efficiently excavate, grade, and
							compact large volumes of earth. This methodology ensures the rapid
							construction of robust dams capable of withstanding extreme
							weather conditions and providing long-term water storage.
						</p>
						<h3 className="text-xl font-semibold">
							Dam Rehabilitation and Maintenance:
						</h3>
						<p>
							In addition to new dam construction, we also offer rehabilitation
							services for existing dams, upgrading their capacity and safety to
							meet current environmental and structural standards. <br />
							Our earth dams are designed to meet the unique needs of our
							clients, offering sustainable water management solutions for
							agricultural, industrial, and urban
						</p>
					</div>
					<div
						style={{
							backgroundImage: "url('/images/dam-1.jpg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
						className="h-full min-h-[40vh]   rounded-xl"></div>
				</div>
				<div className="my-20">
					<p>
						By partnering with KDW Engineering, clients gain access to a
						versatile and experienced team capable of delivering innovative and
						reliable solutions across electrical, solar, water, and
						infrastructure projects. We are committed to excellence,
						sustainability, and long-term partnerships that drive the success of
						every project.
					</p>
				</div>
			</div>
		</div>
	)
}

export default WaterEngineering

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
