import MansoryGrid from "@/components/mansory-grid"
import React from "react"

const images = [
	"/projects/Kasanjiku/1.jpeg",
	"/projects/Kasanjiku/2.jpeg",
	"/projects/Kasanjiku/3.jpeg",
	"/projects/Kasanjiku/4.jpeg",
	"/projects/Kasanjiku/5.jpeg",
	"/projects/Kasanjiku/6.jpeg",
	"/projects/Kasanjiku/7.jpeg",
	"/projects/Kasanjiku/8.jpeg",
	"/projects/Kasanjiku/9.jpeg",
	"/projects/Kasanjiku/10.jpeg",
]
const Kasanjiku = () => {
	return (
		<div className="w-5/6 mx-auto mt-10">
			<div className="grid-cols-1 md:grid-cols-2 grid my-32">
				<h2 className="text-4xl md:text-5xl tracking-tight font-medium">
					Kasanjiku Distribution Network Expansion
				</h2>
				<p className="">
					The Kasanjiku Distribution Network Expansion project aims to improve
					the region's access to reliable electricity by upgrading existing
					infrastructure and extending power lines to underserved areas. This
					initiative will enhance energy distribution, reduce power outages, and
					promote economic growth by supporting local businesses and
					communities. With an increased capacity and modernized systems, the
					expansion is set to meet the growing demand for electricity and
					improve the quality of life for residents.
				</p>
			</div>
			<MansoryGrid images={images} />
		</div>
	)
}

export default Kasanjiku
