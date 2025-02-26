'use client'

import { motion } from 'framer-motion'
import { WorldMap } from './ui/world-map'

export function Map() {
	return (
		<div className=" py-20  bg-nuetral-100 w-full">
			<div className="max-w-7xl mx-auto text-center">
				<h2 className="font-bold text-xl md:text-4xl text-black">
					Global{' '}
					<span className="text-primary">
						{'Reach'.split('').map((word, idx) => (
							<motion.span
								key={idx}
								className="inline-block"
								initial={{ x: -10, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: idx * 0.04 }}>
								{word}
							</motion.span>
						))}
					</span>
				</h2>
				<p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
					At KDW Global, we operate as a unified team with an international
					presence, bringing together diverse talents from across the globe. Our
					strong internal culture fosters collaboration, innovation, and growth,
					.
				</p>
			</div>
			<WorldMap
				dots={[
					{
						start: {
							lat: 25.2653471,
							lng: 55.2924914,
						}, // Dubai
						end: { lat: 1.4419683, lng: 38.4313975 }, // Kenya
					},

					{
						start: { lat: 1.4419683, lng: 38.4313975 }, // Kenya
						end: { lat: -15.3410710164977, lng: 28.188000338430058 }, // Zambia
					},

					{
						start: { lat: -15.3410710164977, lng: 28.188000338430058 }, // Zambia
						end: { lat: -28.8166236, lng: 24.991639 }, // South Africa
					},
				]}
			/>
		</div>
	)
}
