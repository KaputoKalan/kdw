"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { motion, useMotionValue } from "framer-motion"

const imgs = [
	"/projects/coal-plant/4.jpeg",
	"/images/image2.jpg",
	"/images/image3.jpg",
]

const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 10
const DRAG_BUFFER = 50

const SPRING_OPTIONS = {
	type: "spring",
	mass: 3,
	stiffness: 400,
	damping: 50,
}

export const SwipeCarousel = () => {
	const [imgIndex, setImgIndex] = useState(0)

	const dragX = useMotionValue(0)

	useEffect(() => {
		const intervalRef = setInterval(() => {
			const x = dragX.get()

			if (x === 0) {
				setImgIndex((pv) => {
					if (pv === imgs.length - 1) {
						return 0
					}
					return pv + 1
				})
			}
		}, AUTO_DELAY)

		return () => clearInterval(intervalRef)
	}, [])

	const onDragEnd = () => {
		const x = dragX.get()

		if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
			setImgIndex((pv) => pv + 1)
		} else if (x >= DRAG_BUFFER && imgIndex > 0) {
			setImgIndex((pv) => pv - 1)
		}
	}

	return (
		<div className="relative overflow-hidden bg-transparent w-full">
			<motion.div
				drag="x"
				dragConstraints={{
					left: 0,
					right: 0,
				}}
				style={{
					x: dragX,
				}}
				animate={{
					translateX: `-${imgIndex * 100}%`,
				}}
				transition={SPRING_OPTIONS}
				onDragEnd={onDragEnd}
				className="flex cursor-grab items-center active:cursor-grabbing w-full">
				<Images imgIndex={imgIndex} />
			</motion.div>

			{/* <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} /> */}
		</div>
	)
}

const Images = ({ imgIndex }: { imgIndex: number }) => {
	return (
		<>
			{imgs.map((imgSrc, idx) => {
				return (
					<motion.div
						key={idx}
						style={{
							backgroundImage: `url(${imgSrc})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
						animate={{
							scale: imgIndex === idx ? 1 : 0.85,
						}}
						className="h-[50vh] w-screen shrink-0 mt-20 bg-neutral-800 object-cover"
					/>
				)
			})}
		</>
	)
}
