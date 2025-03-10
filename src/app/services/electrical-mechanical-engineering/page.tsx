import CustomCard from "@/components/ui/custom-card"
import Image from "next/image"

export default function ElectricalMechanicalEngineeringPage() {
	return (
		<div className="min-h-screen mt-20">
			<div
				className="min-h-[40vh] "
				style={{
					backgroundImage: "url('/images/image2.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}></div>
			<div className="container mx-auto px-4 py-12 mt-16">
				<h1 className="uppercase text-kdw text-4xl font-bold mb-6">
					Electrical & Mechanical Engineering Services
				</h1>

				<div className="grid grid-cols-1 py-10 md:grid-cols-2 gap-6 mb-12">
					<div className="md:mt-4">
						<p className="text-lg mb-4">
							KDW Engineering excels in delivering comprehensive electrical
							solutions, offering turnkey projects from initial concept to final
							commissioning. Our expertise spans a wide range of electrical
							systems, from High Tension (HT) to Low Tension (LT) installations,
							and includes critical infrastructure such as power distribution
							lines, substations, and switching stations. We pride ourselves on
							ensuring that our projects meet the highest standards of quality,
							efficiency, and sustainability.
						</p>
						<p className="text-lg">
							We specialize in creating integrated solutions that optimize energy
							usage, enhance comfort, and improve overall building performance.
							Our services cover everything from initial design to installation
							and maintenance.
						</p>
					</div>
					<div className="relative h-[35vh] ">
						<Image
							src="/images/image2.jpg"
							alt="Electrical & Mechanical Engineering Project"
							layout="fill"
							objectFit="cover"
							className="rounded-lg"
						/>
					</div>
				</div>

				<section className="bg-white my-10">
					<div className="py-8 sm:py-16 lg:px-6">
						<div className="max-w-screen mb-8 lg:mb-16">
							<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Services</h2>
							<p className="text-gray-500 sm:text-xl dark:text-gray-400">Our Turnkey Electrical Engineering services include:</p>
						</div>
						<div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
							<div>
								<div className="flex justify-center items-center min-w-full h-10 my-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
									<img src="/planning.png" height={70} width={70} alt="" />
								</div>
								<h3 className="mb-2 text-l font-bold dark:text-white">Design, Engineering, and Planning</h3>
								<p className="text-gray-500 dark:text-gray-400">We provide
									tailored design solutions, ensuring that every project meets the
									specific needs of our clients while adhering to international
									safety and operational standards.</p>
							</div>
							<div>
								<div className="flex justify-center items-center min-w-full h-10 my-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
									{/* <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg> */}
									<img src="/management.png" height={80} width={80} alt="" />
								</div>
								<h3 className="mb-2 text-l font-bold dark:text-white">
									Procurement and Project Management
								</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Sourcing from trusted global manufacturers, we manage procurement
									and logistics with precision to ensure timely delivery of
									high-quality materials.
								</p>
							</div>
							<div>
								<div className="flex justify-center items-center min-w-full h-10 my-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
									{/* <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg> */}
									<img src="/construction.png" height={70} width={70} alt="" />
								</div>
								<h3 className="mb-2 text-l font-bold dark:text-white">
									Construction, Erection, and Commissioning
								</h3>
								<p className="text-gray-500 dark:text-gray-400">
									From the construction of electrical systems to the final
									commissioning and testing of installations, we ensure that every
									system operates reliably and efficiently.
								</p>
							</div>
							<div>
								<div className="flex justify-center items-center min-w-full h-10 my-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
									{/* <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg> */}
									<img src="/maintenance.png" height={70} width={70} alt="" />
								</div>
								<h3 className="mb-2 text-l font-bold dark:text-white">
									Maintenance and Upgrades
								</h3>
								<p className="text-gray-500 dark:text-gray-400">
									We offer continuous support and system upgrades to extend the
									lifespan of electrical infrastructure and reduce downtime for
									critical installations.
								</p>
							</div>
						</div>
					</div>
				</section>

				<div className="my-10">
					<h2 className="text-2xl font-bold mb-4 min-w-screen mx-auto">Featured Projects</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<CustomCard
							small
							title="Lagos Smart Office Tower"
							subtitle="State-of-the-art office building in Lagos, Nigeria, featuring
							advanced building automation and energy management systems."
							href="#"
						/>
						<CustomCard
							small
							title="Nairobi Green Hospital"
							subtitle="Eco-friendly hospital in Nairobi, Kenya, with innovative
							mechanical systems for optimal energy efficiency and patient
							comfort."
							href="#"
						/>
						<CustomCard
							small
							title="Cairo Metro Electrification"
							subtitle="Comprehensive electrical engineering project for Cairo's
							expanding metro system, enhancing urban mobility."
							href="#"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
