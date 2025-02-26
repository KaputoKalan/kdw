'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface MansoryGridProps {
	images: string[]
}
const MansoryGrid = ({ images }: MansoryGridProps) => {
	return (
		<div className="columns-1 sm:columns-2 lg:columns-3 my-20">
			{images.map((image, index) => (
				<motion.div
					transition={{
						staggerChildren: 0.035,
					}}
					key={index}
					className="mb-4 break-inside-avoid group">
					<motion.img
						src={image}
						alt="image"
						className="w-full object-cover rounded-lg saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-90 transition-all duration-500"
					/>
				</motion.div>
			))}
		</div>
	)
}

export default MansoryGrid
