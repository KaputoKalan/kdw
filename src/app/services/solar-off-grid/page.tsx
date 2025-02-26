import React from "react"

const SolarOffGrid = () => {
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
						TURNKEY SOLAR & OFF-GRID SOLUTIONS
					</h1>
					<p className="max-w-6xl">
						KDW Engineering brings innovative solutions to water resource
						management, delivering reliable and efficient water infrastructure
						across Zambia. From water supply systems to wastewater treatment, we
						ensure that our designs meet the demands of modern urban and rural
						communities.
					</p>
				</div>
			</div>
		</div>
	)
}

export default SolarOffGrid
