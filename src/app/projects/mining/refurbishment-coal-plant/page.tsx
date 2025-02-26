import MansoryGrid from "@/components/mansory-grid"
import React from "react"

const CoalPlant = () => {
	return (
		<div className="w-5/6 mx-auto mt-10">
			<div className="grid-cols-1 md:grid-cols-2 grid my-32">
				<div className="flex items-center justify-center flex-col max-w-2xl space-y-4">
					<h2 className="text-4xl  tracking-tight font-medium">
						Complete refurbishment of Keestrack 1800 Explorer Deck Screen for
						Coal Plant
					</h2>
					<p className="">
						Our team successfully completed the refurbishment of the Keestrack
						1800 Explorer Deck Screen, ensuring optimal performance and
						efficiency for the coal plant. This project involved meticulous
						attention to detail, from mechanical repairs to electrical upgrades,
						delivering a state-of-the-art solution tailored to the plant's
						needs.
					</p>
				</div>
				<div className="my-10">
					<video controls className="w-full rounded-lg shadow-lg">
						<source src="/projects/coal-plant/video.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</div>
	)
}

export default CoalPlant
