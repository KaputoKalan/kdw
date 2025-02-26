'use client'

import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { NavigationMenuMiddle } from './main-nav'
import { Button } from '../ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet'

import { MenuIcon } from 'lucide-react'
import { MenuItem, menuItems } from './mobile-nav'

interface MenuItemProps {
	label: string
	href?: string
	children?: MenuItemProps[]
}

export function Navbar({ className }: { className?: string }) {
	const [menuStack, setMenuStack] = useState<MenuItemProps[][]>([menuItems])

	const pushMenu = useCallback((items: MenuItemProps[]) => {
		setMenuStack((prevStack) => [...prevStack, items])
	}, [])

	const currentMenu = menuStack[menuStack.length - 1]

	return (
		<div
			className={cn(
				'fixed top-0 inset-x-0 h-20 bg-white/80 backdrop-blur-sm z-50',
				className,
			)}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
				<Link href="/" className="flex items-center">
					<Image
						src="/logo.svg"
						alt="Company Logo"
						width={40}
						height={40}
						className="w-auto h-8"
					/>
				</Link>
				<Sheet>
					<SheetTrigger asChild>
						<Button
							className="md:hidden shink-0"
							variant={'outline'}
							size={'icon'}>
							<MenuIcon className="h-5 w-5" />
						</Button>
					</SheetTrigger>
					<SheetContent className="space-y-4">
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
						<div className=" md:hidden flex items-center  space-x-4">
							<Button asChild>
								<SheetClose asChild>
									<Link href="/contact">Get in-touch</Link>
								</SheetClose>
							</Button>
						</div>
					</SheetContent>
				</Sheet>

				<div className="hidden md:flex justify-center">
					<NavigationMenuMiddle />
				</div>
				<div className=" hidden md:flex items-center justify-end space-x-4">
					<Button>
						<Link href="/contact">Get in-touch</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}
