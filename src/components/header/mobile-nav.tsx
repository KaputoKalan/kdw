"use client"

import React, { useState, useCallback } from "react"
import { ChevronRight, ChevronLeft, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { SheetClose } from "../ui/sheet"

interface MenuItemProps {
	label: string
	href?: string
	children?: MenuItemProps[]
}

export const MenuItem: React.FC<MenuItemProps> = ({
	label,
	href,
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleSubmenu = useCallback(() => {
		setIsOpen(!isOpen)
	}, [isOpen])

	const variants = {
		closed: { height: 0, opacity: 0 },
		open: { height: "auto", opacity: 1 },
	}

	if (children) {
		return (
			<div>
				<button
					className="flex w-full items-center justify-between py-2 px-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
					onClick={toggleSubmenu}
					aria-expanded={isOpen}>
					<span>{label}</span>
					<ChevronRight
						className={`h-4 w-4 transition-transform ${
							isOpen ? "rotate-90" : ""
						}`}
					/>
				</button>
				<motion.div
					className="pl-4 overflow-hidden"
					initial="closed"
					animate={isOpen ? "open" : "closed"}
					variants={variants}
					transition={{ duration: 0.3, ease: "easeInOut" }}>
					{children.map((child, index) => (
						<MenuItem key={index} {...child} />
					))}
				</motion.div>
			</div>
		)
	}

	return (
		<SheetClose asChild>
			<Link
				href={href || "#"}
				className="block py-2 px-4 hover:text-primary focus:outline-none focus:bg-gray-100">
				{label}
			</Link>
		</SheetClose>
	)
}

export const menuItems: MenuItemProps[] = [
	{ label: "Home", href: "/" },
	{
		label: "Services",
		children: [
			{
				label: "Building Construction",
				href: "/services/building-construction",
			},
			{
				label: "Electrical & Mechanical Engineering",
				href: "/services/electrical-mechanical-engineering",
			},
			{ label: "Mining Engineering", href: "/services/mining-engineering" },
			{ label: "Structural Services", href: "/services/structural-services" },
			{ label: "Specialist Services", href: "/services/specialist-services" },
		],
	},
	{
		label: "Projects",
		children: [
			{
				label: "Infrastructure",
				href: "/projects/infrastructure",
			},
			// {
			// 	label: 'Commercial',
			// 	href: '/projects/commercial',
			// },
			{ label: "Energy", href: "/projects/energy" },
			// { label: 'Logistics', href: '/projects/logistics' },
		],
	},
	{ label: "Contact", href: "/contact" },
	{ label: "About Us", href: "/about" },
]

const MobileMenu: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [menuStack, setMenuStack] = useState<MenuItemProps[][]>([menuItems])

	const toggleMenu = useCallback(() => {
		setIsOpen(!isOpen)
	}, [isOpen])

	const pushMenu = useCallback((items: MenuItemProps[]) => {
		setMenuStack((prevStack) => [...prevStack, items])
	}, [])

	const popMenu = useCallback(() => {
		setMenuStack((prevStack) => prevStack.slice(0, -1))
	}, [])

	const currentMenu = menuStack[menuStack.length - 1]

	return (
		<div className="relative">
			<Button
				variant="outline"
				size="icon"
				className="md:hidden"
				onClick={toggleMenu}
				aria-label="Toggle menu">
				<Menu className="h-4 w-4" />
			</Button>
			{isOpen && (
				<nav
					className="fixed inset-0 z-50 bg-white shadow-lg transition-transform duration-300 ease-in-out"
					aria-label="Mobile navigation menu">
					<div className="flex items-center justify-between border-b p-4">
						<h2 className="text-lg font-semibold">Menu</h2>
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleMenu}
							aria-label="Close menu">
							&times;
						</Button>
					</div>
					<div className="h-full overflow-y-auto pb-20">
						{menuStack.length > 1 && (
							<button
								className="flex w-full items-center p-4 text-sm text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
								onClick={popMenu}>
								<ChevronLeft className="mr-2 h-4 w-4" />
								Back
							</button>
						)}
						{currentMenu.map((item, index) => (
							<MenuItem
								key={index}
								{...item}
								children={
									item.children
										? item.children.map((child) => ({
												...child,
												onClick: () => pushMenu(item.children || []),
										  }))
										: undefined
								}
							/>
						))}
					</div>
				</nav>
			)}
		</div>
	)
}

export default MobileMenu
