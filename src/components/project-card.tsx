'use client'

import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
// import Link from "next/link";

interface ProjectCardProps {
	title: string
	description: string
	imageUrl: string
	category: string
	projectLink: string // New prop for linking to the project details
}

export function ProjectCard({
	title,
	description,
	imageUrl,
	category,
	projectLink,
}: ProjectCardProps) {
	console.log(projectLink)
	return (
		<Link href={projectLink} className="cursor-pointer">
			<CardContainer className="inter-var">
				<CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
					{/* Image Section */}
					<CardItem
						translateZ="50"
						className="w-full h-60 relative rounded-xl overflow-hidden">
						<Image
							src={imageUrl}
							alt={title}
							layout="fill"
							objectFit="cover"
							className="group-hover/card:shadow-xl"
						/>
					</CardItem>

					{/* Title and Category */}
					<CardItem
						translateZ="60"
						className="text-xl font-bold text-neutral-600 dark:text-white mt-4">
						{title}
					</CardItem>

					{/* Description */}
					<CardItem
						translateZ="80"
						className="text-neutral-500 line-clamp-2 text-sm dark:text-neutral-300 mt-4">
						{description}
					</CardItem>

					{/* Action Buttons */}
					<div className="flex justify-between items-center mt-4">
						{/* Project Link */}
						{/* <CardItem
            translateZ="90"
            as={Link}
            href={projectLink}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
            View Project →
            </CardItem> */}

						{/* Call to Action */}
						{/* <CardItem
            translateZ="100"
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
            Get Started
            </CardItem> */}
					</div>
				</CardBody>
			</CardContainer>
		</Link>
	)
}
