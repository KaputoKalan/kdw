import MansoryGrid from '@/components/mansory-grid'
import React from 'react'

const images = [
	'/projects/Lufwanyama/1.jpeg',
	'/projects/Lufwanyama/2.jpeg',
	'/projects/Lufwanyama/3.jpeg',
	'/projects/Lufwanyama/4.jpeg',
	'/projects/Lufwanyama/5.jpeg',
	'/projects/Lufwanyama/6.jpeg',
]
const Lufwanyama = () => {
	return (
		<div className="w-5/6 mx-auto mt-10">
			<div className="grid-cols-1 md:grid-cols-2 grid my-32">
				<h2 className="text-4xl md:text-5xl tracking-tight font-medium">
					Periodic Maintenance of Selected Feeder Roads in Lufwanyama
				</h2>
				<p className="">
					The project focuses on the periodic maintenance of selected feeder
					roads in Lufwanyama to ensure safe and reliable transportation for
					local communities. This includes activities such as grading, pothole
					patching, drainage clearance, and vegetation control to improve road
					conditions and accessibility.
				</p>
			</div>
			<MansoryGrid images={images} />
		</div>
	)
}

export default Lufwanyama
