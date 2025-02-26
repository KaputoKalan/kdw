import MansoryGrid from "@/components/mansory-grid"
import React from "react"

const images = [
	"/projects/kambilombilo-1/1.jpeg",
	"/projects/kambilombilo-1/2.jpeg",
	"/projects/kambilombilo-1/3.jpeg",
	"/projects/kambilombilo-1/4.jpeg",
	"/projects/kambilombilo-1/5.jpeg",
	"/projects/kambilombilo-1/6.jpeg",
]
const Kambilombilo = () => {
	return (
		<div className="w-5/6 mx-auto mt-10">
			<div className="grid-cols-1 md:grid-cols-2 grid my-32">
				<h2 className="text-4xl md:text-5xl tracking-tight font-medium">
					Kambilombilo Distribution Network
				</h2>
				<p className="">
					The Kambilombilo Distribution Network project is focused on expanding
					and enhancing electricity access to the Kambilombilo region. By
					upgrading and extending the power grid, the project will provide more
					reliable and consistent energy supply to households, businesses, and
					public institutions. This expansion is crucial for fostering economic
					development, improving living standards, and ensuring sustainable
					energy access for the growing population in the area.
				</p>
			</div>
			<MansoryGrid images={images} />
		</div>
	)
}

export default Kambilombilo
