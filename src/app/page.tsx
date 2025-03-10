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
			<div className="space-y-20">
				<SwipeCarousel />
				<BackgroundBeamsWithCollisionHero />
			</div>
			<AppleCardsCarousel />
			<WhoWeAre />

			<OurServices />
		</div>
	)
}
