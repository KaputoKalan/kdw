"use client"
import { motion } from "framer-motion"
import { Map } from "@/components/map"
import Image from "next/image"

export default function AboutPage() {
	const slideInVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	}

	const blurVariants = {
		hidden: { filter: "blur(5px)", opacity: 0 },
		visible: { filter: "blur(0px)", opacity: 1 },
	}

	return (
		<div className="mt-24  space-y-10 bg-neutral-100 ">
			<div className="min-h-[50vh] w-5/6 md:w-full mx-auto relative flex items-center justify-center flex-col space-y-10 ">
				<div
					className="absolute inset-0 overflow-hidden opacity-40"
					aria-hidden="true">
					<Image
						layout="fill"
						objectFit="cover"
						src="/kwd-mesh.svg"
						alt="KDW Engineering Project"
					/>
				</div>
				<h1 className="text-4xl lg:text-6xl font-bold text-center z-20">
					About KDW <span className="text-primary">Global</span>
				</h1>
				<p className="text-center  max-w-3xl mx-auto text-lg z-20">
					We strive to build a stronger reputation for quality and on-time
					delivery, setting new benchmarks in the industry. To achieve this, we
					have developed a resilient framework—our “shock absorbers”—which
					allows us to navigate the challenges of the market and consistently
					deliver exceptional results to our clients. As we continue to grow
					under the umbrella of KDW Global, we remain committed to serving our
					clients better and pushing the boundaries of engineering and
					construction excellence
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="bg-primary min-h-[80vh] h-full py-6 px-10  lg:px-20 text-white flex items-center justify-center relative">
					<div
						className="absolute inset-0 overflow-hidden opacity-10"
						aria-hidden="true">
						<Image
							layout="fill"
							objectFit="cover"
							src="/kwd-mesh.svg"
							alt="KDW Engineering Project"
						/>
					</div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						variants={slideInVariants}
						className="space-y-4">
						<h2 className="text-3xl font-bold">OUR VISION</h2>
						<ul className="list-disc pl-5 space-y-2">
							<li>
								To be the leading construction firm across Africa, delivering
								world-class infrastructure that enhances the quality of life for
								communities in Zambia, South Africa, Kenya, and beyond.
							</li>
							<li>
								To set new industry standards in safety, quality, and service
								excellence, positioning ourselves as the benchmark for others to
								follow.
							</li>
							<li>
								To be an employer of choice, attracting top talent and fostering
								skills development that leaves a lasting impact on the
								communities we serve
							</li>
							<li>
								To be recognized globally as a trusted, skilled, and
								professional business partner, offering innovative solutions
								that transform the industry.
							</li>
						</ul>
					</motion.div>
				</div>
				<motion.div
					className="min-h-[80vh] h-full w-full overflow-hidden"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 1, ease: "easeOut" }}
					variants={blurVariants}>
					<Image
						src="/images/image1.jpg"
						alt="image1"
						width={800}
						height={800}
						className="h-full w-full object-cover"
						objectFit="cover"
					/>
				</motion.div>
				<motion.div
					className="min-h-[80vh] h-full w-full overflow-hidden"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 1, ease: "easeOut" }}
					variants={blurVariants}>
					<Image
						src="/images/image2.jpg"
						alt="image2"
						width={800}
						height={800}
						className="h-full w-full object-cover"
						objectFit="cover"
					/>
				</motion.div>
				<div className=" min-h-[80vh] h-full py-6 px-10 lg:px-20 text-black flex items-center justify-center relative">
					<div
						className="absolute inset-0 overflow-hidden opacity-40"
						aria-hidden="true">
						<Image
							layout="fill"
							objectFit="cover"
							src="/kwd-mesh.svg"
							alt="KDW Engineering Project"
						/>
					</div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						variants={slideInVariants}
						className="space-y-4 z-20">
						<h2 className="text-3xl font-bold">
							OUR CORE <span className="text-primary">VALUES</span>
						</h2>
						<p className=" text-sm">
							At KDW Engineering, our values are the foundation of everything we
							do, guiding us as we build the future across Africa. We are
							dedicated to:
						</p>
						<ul className="list-disc pl-5 space-y-2">
							<li>
								People: Empowering our teams, clients, and communities through
								meaningful partnerships and development.
							</li>
							<li>
								Customer Focus: Placing our clients at the core of every
								decision to ensure their needs drive our success.
							</li>
							<li>
								Excellence: Striving for exceptional performance in every
								project, exceeding expectations with top-tier results.
							</li>
							<li>
								Honesty: Fostering a culture of openness, transparency, and
								trust.
							</li>
						</ul>
					</motion.div>
				</div>
				<div className="bg-primary min-h-[80vh] h-full py-6 px-10 lg:px-20 text-white flex items-center justify-center relative">
					<div
						className="absolute inset-0 overflow-hidden opacity-10"
						aria-hidden="true">
						<Image
							layout="fill"
							objectFit="cover"
							src="/kwd-mesh.svg"
							alt="KDW Engineering Project"
						/>
					</div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						variants={slideInVariants}
						className="space-y-4">
						<h2 className="text-3xl font-bold">OUR STRATEGY</h2>
						<p>
							Our strategy is clear: we aim to deliver high-quality projects
							that not only meet but exceed client expectations—delivered on
							time, within budget, and with complete integrity.
						</p>
						<p>
							By leveraging our <strong>core expertise</strong> and{" "}
							<strong>multinational partnerships</strong>, we execute
							cutting-edge civil engineering, infrastructure, and building
							projects throughout Zambia, South Africa, Kenya, and other key
							markets. Our successful collaborations with leading companies like
							BL&D Equipment, Hyundai Equipment, Liege Africa, CHICO, and China
							State, among others, have enabled us to fulfill our promise of
							excellence.
						</p>
						<p>
							Our approach is built on fostering dynamic, long-term partnerships
							that empower us to expand our reach and influence in the
							construction industry. Together, we’re shaping the future of
							infrastructure across Africa, delivering innovative, reliable, and
							transformative solutions that redefine possibilities for
							generations to come.
						</p>
					</motion.div>
				</div>
				<motion.div
					className="min-h-[80vh] h-full w-full overflow-hidden"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 1, ease: "easeOut" }}
					variants={blurVariants}>
					<Image
						src="/images/image3.jpg"
						alt="image3"
						width={800}
						height={800}
						className="h-full w-full object-cover"
						objectFit="cover"
					/>
				</motion.div>
				<motion.div
					className="min-h-[80vh] h-full w-full overflow-hidden"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 1, ease: "easeOut" }}
					variants={blurVariants}>
					<Image
						src="/images/image5.jpg"
						alt="image2"
						width={800}
						height={800}
						className="h-full w-full object-cover"
						objectFit="cover"
					/>
				</motion.div>
				<div className="min-h-[80vh] h-full py-6 px-10 lg:px-20 text-black flex items-center justify-center relative">
					<div
						className="absolute inset-0 overflow-hidden opacity-40"
						aria-hidden="true">
						<Image
							layout="fill"
							objectFit="cover"
							src="/kwd-mesh.svg"
							alt="KDW Engineering Project"
						/>
					</div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						variants={slideInVariants}
						className="space-y-4 z-20">
						<h2 className="text-3xl font-bold">
							WHO WE <span className="text-primary">ARE</span>
						</h2>
						<p className="">
							KDW Engineering, now a dynamic subsidiary of KDW Global, leads the
							way in delivering world-class infrastructure solutions across
							Africa and beyond. As a multidisciplinary construction firm, we
							offer{" "}
							<strong>comprehensive, top-tier construction services</strong> to
							both local and international clients, consistently exceeding
							expectations through our unwavering commitment to{" "}
							<strong>excellence, innovation, and sustainability.</strong>
						</p>
						<p>
							Our expertise ranges from{" "}
							<strong>project management and property development</strong> to
							the intricate skills required at each stage of construction,
							ensuring seamless project execution from start to finish.
						</p>
						<p>
							At the heart of KDW’s growth are strong business networks and
							partnerships built on{" "}
							<strong>trust, transparency, and shared success.</strong>
						</p>
						<p>
							We combine innovative engineering techniques with forward-thinking
							design to create infrastructure solutions that are not only
							efficient but also sustainable. With a focus on{" "}
							<strong>
								energy conservation, environmental protection, and community
								development
							</strong>
							, every KDW project is designed to contribute to a brighter, more
							sustainable future.
						</p>
					</motion.div>
				</div>
			</div>
			<div className="w-5/6 mx-auto relative">
				<div
					className="absolute inset-0 overflow-hidden opacity-20"
					aria-hidden="true">
					<Image
						layout="fill"
						objectFit="cover"
						src="/kwd-mesh.svg"
						alt="KDW Engineering Project"
					/>
				</div>
				<div className="z-20 space-y-6">
					<h2 className="text-4xl font-bold text-center my-20">
						KDW Global and Subsidiaries{" "}
						<span className="text-primary">Overview</span>
					</h2>
					<div className="mb-20 space-y-4">
						<h3 className="text-xl font-semibold mb-2">
							Subsidiaries and Operations:
						</h3>
						<ul className="list-disc list-inside space-y-2">
							<li>
								<strong>KDW Global SA:</strong> Supervises regional operations
								in South Africa, reporting to the Dubai headquarters.
							</li>
							<li>
								<strong>KDW Engineering (Zambia):</strong> Focuses on
								construction, including electrical works, roads, and dams. Key
								ventures include:
								<ul className="list-disc list-inside ml-6 mt-2">
									<li>Water purification project for sachet water.</li>
									<li>
										Subsidiaries: Crystalroc Limited, Texton Investments,
										Portlands Works.
									</li>
								</ul>
							</li>
							<li>
								<strong>Calvert Resources Group (Zambia):</strong> An investment
								arm with several ventures:
								<ul className="list-disc list-inside ml-6 mt-2">
									<li>
										<strong>Calvert Quantum Logistics:</strong> Operates Sino
										Howo trucks and trailers.
									</li>
									<li>
										<strong>Calvert Pharmaceuticals:</strong> Supplies general
										medicines and innovates cancer diagnostics for rural areas.
										Subsidiaries include Alcal Pharmaceuticals, Salman
										Pharmaceuticals, and Arctic Pharmaceuticals.
									</li>
									<li>
										<strong>Calvert Energy:</strong> Focuses on fuel supply,
										coal, LPG, and lubricants.
									</li>
								</ul>
							</li>
						</ul>
					</div>
					{/* <Image
						src={'/organization-structure.svg'}
						alt="OS"
						height={100}
						width={100}
						className=" w-full h-full "
					/> */}
				</div>
			</div>
			<Map />
		</div>
	)
}
