import MansoryGrid from "@/components/mansory-grid"
import React from "react"

const images = [
	"/projects/chinyingi/1.jpeg",

	"/projects/chinyingi/3.jpeg",
	"/projects/chinyingi/4.jpeg",
	"/projects/chinyingi/5.jpeg",
	"/projects/chinyingi/6.jpeg",
	"/projects/chinyingi/7.jpeg",
	"/projects/chinyingi/8.jpeg",
]
const Chinyingi = () => {
	return (
		<div className="w-5/6 mx-auto mt-10">
			<div className="grid-cols-1 md:grid-cols-2 grid my-32">
				<h2 className="text-4xl md:text-5xl tracking-tight font-medium">
					Chinyingi Distribution Network
				</h2>
				<p className="">
					The Chinyingi Distribution Network project is designed to expand and
					upgrade the local electricity grid, improving energy access for
					residents and businesses in the Chinyingi area. With a focus on
					reliability and sustainability, this project will ensure a consistent
					power supply, reduce outages, and promote economic and social
					development. By increasing the network's capacity, it will support the
					growing energy needs of the community while enabling long-term growth
					and infrastructure stability.
				</p>
			</div>
			<MansoryGrid images={images} />
		</div>
	)
}

export default Chinyingi
