import MansoryGrid from "@/components/mansory-grid"
import React from "react"

const images = [
	"/projects/lupiya-school/1.jpeg",
	"/projects/lupiya-school/2.jpeg",
	"/projects/lupiya-school/3.jpeg",
]
const LupiyaSec = () => {
	return (
		<div className="w-5/6 mx-auto mt-10">
			<div className="grid-cols-1 md:grid-cols-2 grid my-32 gap-10">
				<h2 className="text-4xl md:text-5xl tracking-tight font-medium">
					Construction of Kaminjekenjeke Secondary School
				</h2>
				<p className="">
					The Construction of Kaminjekenjeke Secondary School project focuses on
					building a modern educational facility to provide quality secondary
					education for students in the Kaminjekenjeke area. The project
					includes classrooms, science laboratories, administrative offices, and
					recreational spaces, aiming to enhance access to education and improve
					learning outcomes for the community.
				</p>
			</div>
			<MansoryGrid images={images} />
		</div>
	)
}

export default LupiyaSec
