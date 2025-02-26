import MansoryGrid from "@/components/mansory-grid"
import React from "react"

const images = [
	"/projects/double-storey-waterfalls/1.jpeg",
	"/projects/double-storey-waterfalls/2.jpeg",
	"/projects/double-storey-waterfalls/3.jpeg",
	"/projects/double-storey-waterfalls/4.jpeg",
	"/projects/double-storey-waterfalls/5.jpeg",
	"/projects/double-storey-waterfalls/6.jpeg",
	"/projects/double-storey-waterfalls/7.jpeg",
	"/projects/double-storey-waterfalls/8.jpeg",
	"/projects/double-storey-waterfalls/9.jpeg",
	"/projects/double-storey-waterfalls/10.jpeg",
	"/projects/double-storey-waterfalls/11.jpeg",
	"/projects/double-storey-waterfalls/12.jpeg",
	"/projects/double-storey-waterfalls/13.jpeg",
	"/projects/double-storey-waterfalls/14.jpeg",
	"/projects/double-storey-waterfalls/15.jpeg",
	"/projects/double-storey-waterfalls/16.jpeg",
]
const DoubleStoreyWaterfalls = () => {
	return (
		<div className="w-5/6 mx-auto mt-10">
			<div className="grid-cols-1 md:grid-cols-2 grid my-32">
				<h2 className="text-4xl md:text-5xl tracking-tight font-medium">
					Design and Construction of Double Storey Property in Waterfalls,
					Lusaka
				</h2>
				<p className="text-lg text-gray-600 mt-4 md:mt-0">
					Expertly designed and constructed a modern double-storey property in
					the serene and prestigious area of Waterfalls, Lusaka. The project
					involved innovative architectural planning, high-quality construction
					materials, and meticulous attention to detail to create a functional
					and aesthetically pleasing living space. From the foundation to the
					finishing touches, every aspect of the property was crafted to meet
					the highest standards of durability, comfort, and elegance, ensuring a
					timeless addition to the Waterfalls community.
				</p>
			</div>
			<MansoryGrid images={images} />
		</div>
	)
}

export default DoubleStoreyWaterfalls
