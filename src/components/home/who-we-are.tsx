import Link from 'next/link'
import { Button } from '@/components/ui/button'
import localFont from 'next/font/local'

const glancyNeue = localFont({
	src: '../../app/fonts/GlancyrNeue-VF.otf',
	variable: '--font-glancy-neue',
	weight: '100 900',
})

export function WhoWeAre() {
	return (
		<section className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
			<div className="text-center">
				<h2
					className={`max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans ${glancyNeue.className}`}>
					We Are KDW Global
				</h2>
				<p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 font-normal dark:text-neutral-300">
					A premier multidisciplinary firm that provides innovative solutions
					across a diverse range of sectors, including construction,
					engineering, infrastructure development, and sustainable energy. Our
					flagship company, KDW Engineering, serves as the backbone of KDW
					Global, bringing world-class infrastructure projects to life across
					Africa and beyond.
				</p>
				<div className="mt-6">
					<Button asChild variant="link">
						<Link href="/about" className="text-primary hover:underline">
							About Us
						</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}
