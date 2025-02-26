import MansoryGrid from "@/components/mansory-grid"
import React from "react"

const images = [
	"/projects/boarding-house/1.jpeg",
	"/projects/boarding-house/2.jpeg",
	"/projects/boarding-house/3.jpeg",
	"/projects/boarding-house/4.jpeg",
	"/projects/boarding-house/5.jpeg",
	"/projects/boarding-house/6.jpeg",
	"/projects/boarding-house/7.jpeg",
	"/projects/boarding-house/8.jpeg",
	"/projects/boarding-house/9.jpeg",
	"/projects/boarding-house/10.jpeg",
	"/projects/boarding-house/11.jpeg",
	"/projects/boarding-house/12.jpeg",
	"/projects/boarding-house/13.jpeg",
	"/projects/boarding-house/14.jpeg",
	"/projects/boarding-house/15.jpeg",
	"/projects/boarding-house/16.jpeg",
	"/projects/boarding-house/17.jpeg",
	"/projects/boarding-house/18.jpeg",
	"/projects/boarding-house/19.jpeg",
	"/projects/boarding-house/20.jpeg",
	"/projects/boarding-house/21.jpeg",
	"/projects/boarding-house/22.jpeg",
	"/projects/boarding-house/23.jpeg",
	"/projects/boarding-house/24.jpeg",
	"/projects/boarding-house/25.jpeg",
	"/projects/boarding-house/26.jpeg",
	"/projects/boarding-house/27.jpeg",
]
const Masaiti = () => {
	return (
		<div className="w-5/6 mx-auto mt-10">
			<div className="grid-cols-1 md:grid-cols-2 grid my-32 gap-10">
				<h2 className="text-4xl md:text-5xl tracking-tight font-medium">
					Construction of girls boarding facilities for Masaiti Secondary School
				</h2>
				<p className="">
					The construction of girls' boarding facilities at Masaiti Secondary
					School aims to provide a safe, supportive, and comfortable environment
					for female students. This development will significantly enhance the
					learning experience, ensuring that girls have equal access to
					educational opportunities while reducing barriers to attendance and
					participation. With modern amenities and dedicated spaces for study,
					rest, and social interaction, the new facilities are designed to
					support academic achievement and personal growth.
				</p>
			</div>
			<MansoryGrid images={images} />
		</div>
	)
}

export default Masaiti
