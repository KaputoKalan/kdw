import { WhoWeAre } from "@/components/home/who-we-are"
import { AppleCardsCarousel } from "@/components/general/cards-section"
import { BackgroundBeamsWithCollisionHero } from "@/components/general/hero-beam"

import SpotlightButton from "@/components/spolight-button"
import CustomCard from "@/components/ui/custom-card"
import Hero from "@/components/home/hero"
import { SwipeCarousel } from "@/components/carousel"
import OurServices from "@/components/home/our-services"

export default function Home() {
	return (
		<div>
			{/* Hero */}
			<div className="space-y-20">
				<SwipeCarousel />
				<BackgroundBeamsWithCollisionHero />
			</div>
			{/* <BackgroundBeamsWithCollisionHero /> */}

			{/* service highlights */}
			<AppleCardsCarousel />
			<WhoWeAre />
			{/* <section className="bg-gray-100 py-16">
				<div className="container mx-auto px-6 min-h-[50vh] py-16">
					<h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
						<CustomCard
							title="Civil Engineering"
							subtitle="Mass earthworks, road construction, bridges, concrete works"
							href="/services/structural-services"
						/>
						<CustomCard
							title="Electrical Engineering"
							subtitle="Solar mini-grids, battery energy storage systems, off-grid
								solutions"
							href="/services/electrical-mechanical-engineering"
						/>
						<CustomCard
							title="Building Construction"
							subtitle="Residential, commercial buildings, renovations, township
								infrastructure"
							href="/services/building-construction"
						/>
					</div>
					<div className="text-center mt-20">
			
						<SpotlightButton text="All Sevices" href="/services" />
					</div>
				</div>
			</section> */}
			<OurServices />
		</div>
	)
}
