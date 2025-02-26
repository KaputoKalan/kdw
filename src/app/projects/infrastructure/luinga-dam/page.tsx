import MansoryGrid from "@/components/mansory-grid"
import React from "react"

const images = [
	"/projects/dam/1.jpeg",
	"/projects/dam/2.jpeg",
	"/projects/dam/3.jpeg",
	"/projects/dam/4.jpeg",
	"/projects/dam/5.jpeg",
	"/projects/dam/6.jpeg",
	"/projects/dam/7.jpeg",
	"/projects/dam/8.jpeg",
	"/projects/dam/9.jpeg",
	"/projects/dam/10.jpeg",
	"/projects/dam/11.jpeg",
	"/projects/dam/12.jpeg",
	"/projects/dam/13.jpeg",
	"/projects/dam/14.jpeg",
	"/projects/dam/15.jpeg",
	"/projects/dam/16.jpeg",
]
const LuingaDam = () => {
	return (
		<div className="w-5/6 mx-auto mt-10">
			<div className="grid-cols-1 md:grid-cols-2 grid my-32 gap-10">
				<h2 className="text-4xl md:text-5xl tracking-tight font-medium">
					Luin'ga Dam Project
				</h2>
				<p className="">
					The Luin'ga Dam Project aims to provide a sustainable water source for
					irrigation, livestock, and domestic use in the surrounding
					communities. This initiative involves the construction of a dam, water
					distribution systems, and capacity-building programs to ensure
					long-term water resource management and agricultural productivity.
				</p>
			</div>
			<MansoryGrid images={images} />
		</div>
	)
}

export default LuingaDam
