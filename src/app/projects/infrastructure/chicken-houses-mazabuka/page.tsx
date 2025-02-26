import MansoryGrid from "@/components/mansory-grid"
import React from "react"

const images = [
	"/projects/chicken-houses-mazabuka/1.jpeg",
	"/projects/chicken-houses-mazabuka/2.jpeg",
	"/projects/chicken-houses-mazabuka/3.jpeg",
	"/projects/chicken-houses-mazabuka/4.jpeg",
]
const DoubleStoreyWaterfalls = () => {
	return (
		<div className="w-5/6 mx-auto mt-10">
			<div className="grid-cols-1 md:grid-cols-2 grid my-32">
				<h2 className="text-4xl md:text-5xl tracking-tight font-medium">
					Construction of Chicken Houses in Mazabuka
				</h2>
				<p className="text-lg text-gray-600 mt-4 md:mt-0">
					Our team successfully designed and constructed state-of-the-art
					chicken houses in Mazabuka, tailored to meet the needs of modern
					poultry farming. The project involved the use of durable materials and
					innovative design techniques to ensure optimal ventilation,
					temperature control, and biosecurity. These facilities are designed to
					enhance productivity, improve animal welfare, and support sustainable
					farming practices, providing a reliable and efficient solution for the
					client's poultry operations.
				</p>
			</div>
			<MansoryGrid images={images} />
		</div>
	)
}

export default DoubleStoreyWaterfalls
