import Link from 'next/link'
import { IconType } from 'react-icons' // Assuming you're using react-icons for icons

interface CardProps {
	title: string
	subtitle: string
	Icon?: IconType // Type for icons from react-icons
	href: string
	small?: boolean
	children?: React.ReactNode // Allows passing child components
}

const CustomCard: React.FC<CardProps> = ({
	title,
	subtitle,
	Icon,
	href,
	small,
	children,
}) => {
	return (
		<Link
			href={href}
			className="w-full p-4 rounded-xl border-[1px] border-slate-300 relative overflow-hidden group flex items-center justify-center flex-col bg-white min-h-[20vh] h-full">
			<div className="absolute inset-0 bg-gradient-to-r space-y-4 from-primary to-[#e62f6c] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

			{Icon && (
				<Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-slate-200 group-hover:rotate-12 transition-transform duration-300" />
			)}
			{Icon && (
				<Icon className="mb-2 text-2xl text-primary group-hover:text-white transition-colors relative z-10 duration-300" />
			)}
			<h3
				className={`font-semibold ${
					small ? 'text-base mb-6' : 'text-xl mb-2'
				} text-slate-950 group-hover:text-white relative z-10 duration-300`}>
				{title}
			</h3>
			<p
				className={` ${
					small ? 'text-sm' : 'text-base'
				} text-slate-900 group-hover:text-white text-center relative z-10 duration-300`}>
				{subtitle}
			</p>

			{children && (
				<div className="mt-4 relative z-10 group-hover:text-white ">
					{children}
				</div>
			)}
		</Link>
	)
}

export default CustomCard
