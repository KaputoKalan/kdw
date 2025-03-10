"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface CardProps {
	title: string
	description: string
	link: string
	image: string
}
const Card = ({ data }: { data: CardProps }) => {
	const router = useRouter()
	return (
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
			<a href="#">
				<img
					className="rounded-t-lg"
					src="/docs/images/blog/image-1.jpg"
					alt=""
				/>
			</a>
			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{data.title}
					</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{data.description}
				</p>
				<Button>View more</Button>
			</div>
		</div>
	)
}

export default Card
