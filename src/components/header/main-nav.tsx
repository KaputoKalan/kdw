"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

const projectCategories = [
	{
		title: "Infrastructure",
		href: "/projects/infrastructure",
		description: "Major infrastructure projects across Africa and beyond.",
	},
	{
		title: "Mining",
		href: "/projects/mining",
		description:
			"Explore innovative mining engineering projects focused on resource extraction, sustainability, and advanced technology in the mining industry.",
	},
	{
		title: "Energy",
		href: "/projects/energy",
		description: "Sustainable energy and power distribution projects.",
	},
	// {
	// 	title: 'Logistics',
	// 	href: '/projects/logistics',
	// 	description: 'Transportation and supply chain optimization projects.',
	// },
]

export function NavigationMenuMiddle() {
	return (
		<NavigationMenu>
			<NavigationMenuList className="flex items-center justify-around flex-col md:flex-row">
				<NavigationMenuItem>
					<Link href="/">
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Home
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/about">
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							About us
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<Link href="/services">Services</Link>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<Link
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/services">
										<Image
											src="/images/civil-engineering.jpg"
											alt="civil engineering"
											width={200}
											height={200}
										/>
										<div className="mb-2 mt-4 text-lg font-medium">
											Civil Engineering
										</div>
									</Link>
								</NavigationMenuLink>
							</li>

							{/* Updated ListItem with sub-service links */}
							<ListItem
								href="/services/building-construction"
								title="Building Construction">
								A wide range of construction services for residential and
								commercial buildings.
							</ListItem>

							<ListItem
								href="/services/electrical-mechanical-engineering"
								title="Electrical & Mechanical Engineering">
								Expert services in electrical and mechanical systems for
								residential and commercial projects.
							</ListItem>

							<ListItem
								href="/services/mining-engineering"
								title="Mining Engineering">
								Mining solutions that ensure safety and efficiency in the
								extraction of resources.
							</ListItem>

							<ListItem
								href="/services/water-engineering"
								title="Water engineering">
								innovative solutions to water resource management, delivering
								reliable and efficient water infrastructure across Zambia.
							</ListItem>

							<ListItem
								href="/services/specialist-services"
								title="Specialist Services">
								Specialized services tailored to meet the needs of unique
								construction and engineering projects.
							</ListItem>
							<ListItem href="/services/solar-off-grid" title="Solar Services">
								Off-grid solar solutions for residential and commercial
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<Link href="#">Projects</Link>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{/* {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))} */}

							{projectCategories.map((category) => (
								<ListItem
									key={category.title}
									title={category.title}
									href={category.href}>
									{category.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/culture">
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Culture
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"
