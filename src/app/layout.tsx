import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import Transition from '@/components/transitions/page-transition'
import localFont from 'next/font/local'

const glancyNeue = localFont({
	src: './fonts/GlancyrNeue-VF.otf',
	variable: '--font-glancy-neue',
	weight: '100 900',
})

export const helvetica = localFont({
	src: './fonts/Helvetica.ttf',
	variable: '--font-helvetica',
})
export const metadata: Metadata = {
	title: 'KDW Global',
	description: "Engineering Tomorrow's World with Excellence",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${helvetica.className} antialiased`}>
				<Header />
				<Transition>
					<main>{children}</main>
				</Transition>
				<Footer />
			</body>
		</html>
	)
}
