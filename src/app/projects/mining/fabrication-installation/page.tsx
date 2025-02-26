import MansoryGrid from "@/components/mansory-grid"
import React from "react"

const images = [
	"/projects/coal-plant/1.jpeg",
	"/projects/coal-plant/2.jpeg",
	"/projects/coal-plant/3.jpeg",
	"/projects/coal-plant/4.jpeg",
	"/projects/coal-plant/5.jpeg",
	"/projects/coal-plant/6.jpeg",
]
const FabInstall = () => {
	return (
		<div className="w-5/6 mx-auto mt-10">
			<div className="grid-cols-1 md:grid-cols-2 grid my-32">
				<h2 className="text-4xl md:text-5xl tracking-tight font-medium">
					Fabrication and Installation of 4 Dilute Tanks for Mining Operation
				</h2>
				<p className="text-lg text-gray-600 mt-4 md:mt-0">
					Our team expertly designed, fabricated, and installed four
					state-of-the-art dilute tanks tailored to the specific needs of a
					large-scale mining operation. These tanks were constructed using
					high-quality materials to ensure durability and efficiency in handling
					the demanding conditions of the mining environment. The project
					involved precise engineering, seamless installation, and rigorous
					testing to guarantee optimal performance and reliability for the
					client's operations.
				</p>
			</div>
			<MansoryGrid images={images} />
		</div>
	)
}

export default FabInstall
