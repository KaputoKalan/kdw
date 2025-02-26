import MansoryGrid from "@/components/mansory-grid"
import React from "react"

const images = [
	"/projects/access-roads-waterfalls/1.jpeg",
	"/projects/access-roads-waterfalls/2.jpeg",
	"/projects/access-roads-waterfalls/3.jpeg",
	"/projects/access-roads-waterfalls/4.jpeg",
	"/projects/access-roads-waterfalls/5.jpeg",
	"/projects/access-roads-waterfalls/6.jpeg",
	"/projects/access-roads-waterfalls/7.jpeg",
	"/projects/access-roads-waterfalls/8.jpeg",
	"/projects/access-roads-waterfalls/9.jpeg",
	"/projects/access-roads-waterfalls/10.jpeg",
	"/projects/access-roads-waterfalls/11.jpeg",
]
const AccessRoads = () => {
	return (
		<div className="w-5/6 mx-auto mt-10">
			<div className="grid-cols-1 md:grid-cols-2 grid my-32">
				<h2 className="text-4xl md:text-5xl tracking-tight font-medium">
					Construction of Access Roads for Double Storey Property in Waterfalls
				</h2>
				<p className="text-lg text-gray-600 mt-4 md:mt-0">
					Successfully designed and constructed durable, high-quality access
					roads for a double-storey property located in the scenic area of
					Waterfalls, Lusaka, Zambia. The project involved meticulous planning,
					earthworks, and the use of robust materials to ensure the roads could
					withstand heavy usage and adverse weather conditions. The result is a
					seamless and reliable access solution that enhances the property's
					functionality and aesthetic appeal.
				</p>
			</div>
			<MansoryGrid images={images} />
		</div>
	)
}

export default AccessRoads
