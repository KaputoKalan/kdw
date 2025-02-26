import CustomCard from '@/components/ui/custom-card'
import { FaGear, FaTruckFront, FaUserGroup } from 'react-icons/fa6'
import { CiPillsBottle1 } from 'react-icons/ci'
import { PiFarm } from 'react-icons/pi'
import { MdEnergySavingsLeaf } from 'react-icons/md'

export default function ServicesPage() {
	return (
		<div className="container mx-auto px-4 py-12 mt-16">
			<h1 className="text-4xl font-bold mb-8">Our Services</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<CustomCard
					title="Engineering & Construction"
					subtitle=""
					Icon={FaGear}
					href="#">
					<ul className="list-disc pl-5 space-y-2">
						<li>Road construction</li>
						<li>Bridge building</li>
						<li>Dam construction</li>
						<li>Electrical grid lines installation</li>
						<li>Shopping mall development</li>
					</ul>
				</CustomCard>
				<CustomCard title="Logistics" subtitle="" Icon={FaTruckFront} href="#">
					<ul className="list-disc pl-5 space-y-2">
						<li>Light truck transportation</li>
						<li>Heavy duty cargo transportation</li>
						<li>Oil tanker services</li>
					</ul>
				</CustomCard>
				<CustomCard
					title="Pharmaceuticals"
					subtitle=""
					Icon={CiPillsBottle1}
					href="#">
					<ul className="list-disc pl-5 space-y-2">
						<li>Assorted medicines supply</li>
						<li>Laboratory equipment</li>
						<li>Surgical supplies</li>
					</ul>
				</CustomCard>

				<CustomCard
					title="Agriculture & Manufacturing"
					subtitle=""
					Icon={PiFarm}
					href="#">
					<ul className="list-disc pl-5 space-y-2">
						<li>Fertiliser production</li>
						<li>Agriculture investments</li>
						<li>Wheel alignment services</li>
						<li>Water bottling and purification</li>
						<li>Manufacturing of plastic parts (syringes, gloves, etc.)</li>
					</ul>
				</CustomCard>
				<CustomCard
					title="Energy"
					subtitle=""
					Icon={MdEnergySavingsLeaf}
					href="#">
					<ul className="list-disc pl-5 space-y-2">
						<li>Fertiliser production</li>
						<li>Oil and fuel supply</li>
						<li>Lubricants distribution</li>
						<li>Coke nuts and coal supply</li>
						<li>Solar energy solutions</li>
					</ul>
				</CustomCard>
				<CustomCard title="Consultancy" subtitle="" Icon={FaUserGroup} href="#">
					<ul className="list-disc pl-5 space-y-2">
						<li>Project development</li>
						<li>Construction management</li>
						<li>Procurement services</li>
						<li>Cost control</li>
						<li>Urban rejuvenation planning</li>
					</ul>
				</CustomCard>
			</div>
		</div>
	)
}
