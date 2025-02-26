'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { id, value } = e.target
		setFormData({ ...formData, [id]: value })
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const subject = `Message from ${formData.name} on the KDW Global Website`
		const body = `Message: ${formData.message}`
		const mailtoLink = `mailto:info@kdwglobal.com?subject=${encodeURIComponent(
			subject,
		)}&body=${encodeURIComponent(body)}`

		// Open the user's email client
		window.location.href = mailtoLink
	}

	return (
		<div className=" bg-slate-50">
			<div className="container mx-auto px-4 py-12 mt-16 z-50">
				<h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Get in Touch</CardTitle>
						</CardHeader>
						<CardContent>
							<form className="space-y-4" onSubmit={handleSubmit}>
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700">
										Name
									</label>
									<Input
										id="name"
										placeholder="Your Name"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700">
										Email
									</label>
									<Input
										id="email"
										type="email"
										placeholder="your@email.com"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700">
										Message
									</label>
									<Textarea
										id="message"
										placeholder="Your message here..."
										value={formData.message}
										onChange={handleChange}
										required
									/>
								</div>
								<Button type="submit">Send Message</Button>
							</form>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Our Offices</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="flex items-start space-x-2">
									<MapPin className="h-5 w-5 mt-1" />
									<div>
										<h3 className="font-semibold">Dubai (Headquarters)</h3>
										<p>123 Sheikh Zayed Road, Dubai, UAE</p>
									</div>
								</div>
								<div className="flex items-start space-x-2">
									<MapPin className="h-5 w-5 mt-1" />
									<div>
										<h3 className="font-semibold">Zambia</h3>
										<p>456 Great East Road, Lusaka, Zambia</p>
									</div>
								</div>
								<div className="flex items-start space-x-2">
									<MapPin className="h-5 w-5 mt-1" />
									<div>
										<h3 className="font-semibold">Kenya</h3>
										<p>789 Uhuru Highway, Nairobi, Kenya</p>
									</div>
								</div>
								<div className="flex items-start space-x-2">
									<MapPin className="h-5 w-5 mt-1" />
									<div>
										<h3 className="font-semibold">South Africa</h3>
										<p>
											101 Nelson Mandela Boulevard, Johannesburg, South Africa
										</p>
									</div>
								</div>
								<div className="flex items-center space-x-2">
									<Phone className="h-5 w-5" />
									<p>+971 4 123 4567</p>
								</div>
								<div className="flex items-center space-x-2">
									<Mail className="h-5 w-5" />
									<p>info@kdwglobal.com</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
