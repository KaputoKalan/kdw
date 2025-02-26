import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
	return (
		<footer className="relative bg-primary text-white">
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
			<div className="relative w-full px-4 sm:px-6 py-8 sm:py-12">
				<div className="mx-auto max-w-[1400px]">
					{/* Main footer content */}
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-sm">
						{/* Company Info */}
						<div>
							<h2 className="text-lg font-semibold">Company</h2>
							<ul className="mt-4 space-y-2">
								<li>
									<Link
										href="/about"
										className="text-gray-200 hover:text-teal-300">
										About us
									</Link>
								</li>
								<li>
									<Link
										href="/careers"
										className="text-gray-200 hover:text-teal-300">
										Careers
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className="text-gray-200 hover:text-teal-300">
										Contact
									</Link>
								</li>
							</ul>
						</div>

						{/* Services */}
						<div>
							<h2 className="text-lg font-semibold">Services</h2>
							<ul className="mt-4 space-y-2">
								<li>
									<Link
										href="/services/mining-engineering"
										className="text-gray-200 hover:text-teal-300">
										Engineering
									</Link>
								</li>
								<li>
									<Link
										href="/services/building-construction"
										className="text-gray-200 hover:text-teal-300">
										Construction
									</Link>
								</li>
								<li>
									<Link
										href="/services/structural-services"
										className="text-gray-200 hover:text-teal-300">
										Structural
									</Link>
								</li>
								<li>
									<Link
										href="/services/specialist-services"
										className="text-gray-200 hover:text-teal-300">
										Specialists
									</Link>
								</li>
							</ul>
						</div>

						{/* Resources */}
						<div>
							<h2 className="text-lg font-semibold">Resources</h2>
							<ul className="mt-4 space-y-2">
								<li>
									<Link
										href="/projects"
										className="text-gray-200 hover:text-teal-300">
										Projects
									</Link>
								</li>
							</ul>
						</div>

						{/* Legal */}
						<div>
							<h2 className="text-lg font-semibold">Legal</h2>
							<ul className="mt-4 space-y-2">
								<li>
									<Link
										href="/terms"
										className="text-gray-200 hover:text-teal-300">
										Terms & Conditions
									</Link>
								</li>
								<li>
									<Link
										href="/privacy"
										className="text-gray-200 hover:text-teal-300">
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										href="/compliance"
										className="text-gray-200 hover:text-teal-300">
										Compliance
									</Link>
								</li>
							</ul>
						</div>

						{/* Contact */}
						<div>
							<h2 className="text-lg font-semibold">Contact</h2>
							<ul className="mt-4 space-y-2">
								<li className="text-gray-200">Dubai, UAE (HQ)</li>
								<li className="text-gray-200">info@kdwglobal.com</li>
								<li className="text-gray-200">+971 4 123 4567</li>
							</ul>
						</div>
					</div>

					{/* Footer bottom */}
					<div className="mt-12 border-t border-gray-800 pt-8">
						<div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
							<p className="text-sm text-gray-200">
								&copy; {new Date().getFullYear()} KDW Global. All rights
								reserved.
							</p>

							{/* Social Links */}
							<div className="flex space-x-6">
								<a
									href="#"
									className="text-gray-200 hover:text-teal-300"
									aria-label="Facebook">
									<Facebook className="h-5 w-5" />
								</a>
								<a
									href="#"
									className="text-gray-200 hover:text-teal-300"
									aria-label="Twitter">
									<Twitter className="h-5 w-5" />
								</a>
								<a
									href="#"
									className="text-gray-200 hover:text-teal-300"
									aria-label="LinkedIn">
									<Linkedin className="h-5 w-5" />
								</a>
								<a
									href="#"
									className="text-gray-200 hover:text-teal-300"
									aria-label="Instagram">
									<Instagram className="h-5 w-5" />
								</a>
								<a
									href="#"
									className="text-gray-200 hover:text-teal-300"
									aria-label="YouTube">
									<Youtube className="h-5 w-5" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
