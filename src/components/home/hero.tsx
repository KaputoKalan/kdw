"use client"
import { motion } from "framer-motion"
import React from "react"
import localFont from "next/font/local"
import { SwipeCarousel } from "../carousel"

const glancyNeue = localFont({
	src: "../../app/fonts/GlancyrNeue-VF.otf",
	variable: "--font-glancy-neue",
	weight: "100 900",
})

type Props = {}

const Hero = (props: Props) => {
	return (
		<div>
			<div className="w-5/6 mx-auto flex items-center justify-center">
				<h1
					className={`max-w-5xl text-xl relative z-20 md:text-4xl lg:text-5xl text-center md:ml-10 font-bold tracking-normal leading-10 ${glancyNeue.className}`}>
					Engineering Tomorrow&apos;s World with{" "}
					<span className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#B9003E] via-[#B20044] to-[#93003C]">
						Excellence
						<svg
							viewBox="0 0 286 73"
							fill="none"
							className="absolute -left-2 -right-2 -top-2 bottom-0 md:-translate-y-4 -translate-y-1">
							<motion.path
								initial={{ pathLength: 0 }}
								whileInView={{ pathLength: 1 }}
								transition={{
									duration: 1.25,
									ease: "easeInOut",
								}}
								d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
								stroke="#FACC15"
								strokeWidth="3"
							/>
						</svg>
					</span>{" "}
				</h1>
			</div>
		</div>
	)
}

export default Hero
