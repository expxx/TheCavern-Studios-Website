'use client';

import { JSX, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import {
	ArrowLeft,
	Bird,
	Bot,
	Compass,
	Gamepad2,
	Layout,
	Server,
} from 'lucide-react';
import Image from 'next/image';

export default function Portfolio() {
	// State to track the active filter
	const [activeFilter, setActiveFilter] = useState('all');
	// State to track which project details are being viewed
	const [selectedProject, setSelectedProject] = useState<{
		id: number;
		title: string;
		category: string;
		categoryId: string;
		description: string;
		image: string;
		icon: JSX.Element;
		detailImages: string[];
		longDescription: string;
	} | null>(null);

	// Sample portfolio items - replace with your actual projects
	const allPortfolioItems = [
		{
			id: 1,
			title: 'Penguin Licensing',
			category: 'Discord Bot',
			categoryId: 'discord-bot',
			description:
				'Advanced licensing system for managing access to your products.',
			image: '/img/portfolio/penguinlicensing/img2.avif',
			icon: <Bot className="h-5 w-5" />,
			// Additional images for the project details
			detailImages: [
				'/img/portfolio/penguinlicensing/img1.avif',
				'/img/portfolio/penguinlicensing/img2.avif',
				'/img/portfolio/penguinlicensing/img3.avif',
				'/img/portfolio/penguinlicensing/img4.avif',
			],
			longDescription:
				'This licensing system is designed to manage access to your products effectively. It includes features like license key generation, validation, and revocation. The system is built with security in mind, ensuring that only authorized users can access your products. It also provides instant communication between server and products, allowing for real-time updates and management. The licensing system is easy to integrate with existing products and can be customized to fit your specific needs.',
		},
		{
			id: 2,
			title: 'Personal Freelance',
			category: 'Discord Server',
			categoryId: 'discord-server',
			description:
				'Complete server setup for a personal freelancer to get started!',
			image: 'https://placehold.co/600x400?text=Personal+Freelance',
			icon: <Server className="h-5 w-5" />,
			detailImages: [
				'/img/portfolio/servers/pf/img1.png',
				'/img/portfolio/servers/pf/img2.png',
			],
			longDescription:
				"This custom Discord layout was designed specifically for a personal freelancer. It features a clean and professional theme with role designs and channel organization that reflects the freelancer's services. The layout includes specialized areas for portfolio showcases, client testimonials, service descriptions, and direct communication channels with clients.",
		},
		{
			id: 3,
			title: 'Streamers Server',
			category: 'Discord Server',
			categoryId: 'discord-server',
			description: 'Complete server setup for a streamer to get started!',
			image: 'https://placehold.co/600x400?text=Streamers+Server',
			icon: <Server className="h-5 w-5" />,
			detailImages: [
				'/img/portfolio/servers/ss/img1.png',
				'/img/portfolio/servers/ss/img2.png',
			],
			longDescription:
				"This custom Discord layout was designed specifically for a role-playing game community. It features a medieval fantasy theme with custom icons, role designs, and channel organization that mirrors the game world's structure. The layout includes specialized areas for character sheets, quest logs, in-character and out-of-character discussions, and game master resources.",
		},
		{
			id: 4,
			title: 'Automation',
			category: 'Pterodactyl Plugin',
			categoryId: 'pterodactyl-plugin',
			description:
				'Pterodactyl addon to execute power/command actions on multiple servers at once.',
			image: '/img/portfolio/automation/logo.avif',
			icon: <Bird className="h-5 w-5" />,
			detailImages: [],
			longDescription:
				"This Pterodactyl Addon allows you to execute power and command actions on multiple (or all) servers matching specific criteria, such as per server or node. You can Start, Stop, Restart, or Kill any servers and execute commands on those specified servers. All from your panel's WebUI.",
		},
		{
			id: 5,
			title: 'The Void Bot',
			category: 'Discord Bot',
			categoryId: 'discord-bot',
			description:
				'Feature-rich group chat management bot with the ability to manage group chats with ease.',
			image: '/img/portfolio/thevoidbot/img2.avif',
			icon: <Bot className="h-5 w-5" />,
			detailImages: [
				'/img/portfolio/thevoidbot/img1.avif',
				'/img/portfolio/thevoidbot/img2.avif',
				'/img/portfolio/thevoidbot/img3.avif',
				'/img/portfolio/thevoidbot/img4.avif',
			],
			longDescription:
				'The Void Bot is a feature-rich group chat management bot designed to help you manage your group chats with ease. It includes a wide range of features such as custom commands, moderator/owner status, as well as permission-based commands. This bot is perfect for anyone looking to enhance their group chat experience and make it more organized. The bot is easy to set up and use, with a user-friendly interface and clear instructions. It also includes a variety of customization options, allowing you to tailor the bot to your specific needs.',
		},
		{
			id: 6,
			title: 'MultiEgg',
			category: 'Pterodactyl Plugin',
			categoryId: 'pterodactyl-plugin',
			description:
				'A client-friendly & multiple use egg for pterodactyl. Allows you to have 1 egg for multiple different games.',
			image: '/img/portfolio/multiegg/img1.jpg',
			icon: <Bird className="h-5 w-5" />,
			detailImages: [
				'/img/portfolio/multiegg/img1.jpg'
			],
			longDescription:
				'This egg was designed to be a client-friendly & multiple use egg for pterodactyl. It allows you to have 1 egg for multiple different games. It is designed to be easy to use and understand, with a simple interface and clear instructions. The egg supports a wide range of games and can be easily customized to fit your needs.',
		},
		{
			id: 7,
			title: 'Freelance Studios',
			category: 'Discord Bot',
			categoryId: 'discord-bot',
			description:
				'A custom Discord Bot designed for Freelance Agencies to manage their clients and projects.',
			image: '/img/portfolio/bots/freelance/img3.png',
			icon: <Bot className="h-5 w-5" />,
			detailImages: [
				'/img/portfolio/bots/freelance/img1.png',
				'/img/portfolio/bots/freelance/img2.png',
				'/img/portfolio/bots/freelance/img3.png',
				'/img/portfolio/bots/freelance/img4.png',
			],
			longDescription:
				'This custom Discord Bot was designed specifically for Freelance Agencies to manage their clients and projects. It features a clean and professional theme with role designs and channel organization that reflects the agency\'s services. The bot includes specialized commands for project management, client communication, and task tracking, making it easy for agencies to stay organized and efficient. As well as automated paypal invoices, ticket creation, and freelancer to client communication.',
		},
		{
			id: 8,
			title: 'Capes System',
			category: 'Discord Bot',
			categoryId: 'discord-bot',
			description:
				'A custom Discord Bot for managing Capes distributed through the OptiFine system.',
			image: '/img/portfolio/bots/capes/img4.png',
			icon: <Bot className="h-5 w-5" />,
			detailImages: [
				'/img/portfolio/bots/capes/img1.png',
				'/img/portfolio/bots/capes/img2.png',
				'/img/portfolio/bots/capes/img3.png',
				'/img/portfolio/bots/capes/img4.png',
			],
			longDescription:
				'The Minimalist Theme is a clean, modern Discord layout designed for distraction-free communication. It features a monochromatic color scheme with subtle accent colors, simplified icons, and a streamlined channel structure. The theme is optimized for both desktop and mobile use, ensuring a consistent experience across devices.',
		},
		{
			id: 9,
			title: 'Booster Bot',
			category: 'Discord Bot',
			categoryId: 'discord-bot',
			description:
				'A custom Discord Bot for managing Boost Rewards within a WHMCS-based system.',
			image: 'https://placehold.co/600x400?text=Booster+Bot',
			icon: <Bot className="h-5 w-5" />,
			detailImages: [],
			longDescription:
				"This bot is designed to manage Boost Rewards within a WHMCS-based system. It allows server owners to set up and manage rewards for users who boost their servers. The bot includes features like automatic role assignment, custom messages, and integration with WHMCS for billing and account management. It's designed to be user-friendly and easy to set up.",
		},
		{
			id: 10,
			title: 'Cloud-based Licensing System',
			category: 'Discord Bot',
			categoryId: 'discord-bot',
			description:
				'A cloud-based licensing system for managing access to your products.',
			image: 'https://placehold.co/600x400?text=Cloud-based+Licensing+System',
			icon: <Bot className="h-5 w-5" />,
			detailImages: [],
			longDescription:
				'This cloud-based licensing system is designed to manage access to your products effectively. It includes a web-based interface for generating, validating, and revoking license keys, and configuring your system. The system is built with security in mind, ensuring that only authorized users can access your products. This was designed to be run in a cloud-environment, with 1 hoster and many users. ',
		},
	];

	// Filter portfolio items based on active filter
	const filteredPortfolioItems =
		activeFilter === 'all'
			? allPortfolioItems
			: allPortfolioItems.filter((item) => item.categoryId === activeFilter);

	// Categories for filtering
	const categories = [
		{ id: 'all', name: 'All Projects' },
		{
			id: 'discord-bot',
			name: 'Discord Bots',
			icon: <Bot className="h-4 w-4" />,
		},
		{
			id: 'discord-server',
			name: 'Discord Servers',
			icon: <Server className="h-4 w-4" />,
		},
		{
			id: 'discord-layout',
			name: 'Discord Layouts',
			icon: <Layout className="h-4 w-4" />,
		},
		{
			id: 'minecraft-plugin',
			name: 'Minecraft Plugins',
			icon: <Gamepad2 className="h-4 w-4" />,
		},
		{
			id: 'pterodactyl-plugin',
			name: 'Pterodactyl Plugins',
			icon: <Bird className="h-4 w-4" />,
		},
	];

	return (
		<div className="flex flex-col min-h-screen">
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center justify-between">
					<Link href="/" className="flex items-center gap-2 font-bold text-xl">
						<span className="sr-only">TheCavern Studios</span>
						<Compass className="h-6 w-6" />
						TheCavern Studios
					</Link>
					<nav className="hidden md:flex gap-6">
						<Link
							href="/#services"
							className="text-sm font-medium hover:underline underline-offset-4"
						>
							Services
						</Link>
						<Link
							href="/portfolio"
							className="text-sm font-medium hover:underline underline-offset-4"
						>
							Portfolio
						</Link>
						<Link
							href="/reviews"
							className="text-sm font-medium hover:underline underline-offset-4"
						>
							Reviews
						</Link>
						<Link
							href="/#about"
							className="text-sm font-medium hover:underline underline-offset-4"
						>
							About
						</Link>
						<Link
							href="/#discord"
							className="text-sm font-medium hover:underline underline-offset-4"
						>
							Discord
						</Link>
					</nav>
					<Button asChild>
						<Link href="/#discord">Join Our Discord</Link>
					</Button>
				</div>
			</header>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-start space-y-4">
							<Button asChild variant="ghost" size="sm" className="mb-4">
								<Link href="/">
									<ArrowLeft className="mr-2 h-4 w-4" />
									Back to Home
								</Link>
							</Button>
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Our Portfolio
								</h1>
								<p className="max-w-[900px] text-muted-foreground md:text-xl">
									Explore our past projects and see how we&#39;ve helped our
									clients build amazing Discord and Minecraft experiences.
								</p>
							</div>
						</div>

						<div className="mt-8 flex flex-wrap gap-2">
							{categories.map((category) => (
								<Button
									key={category.id}
									variant={activeFilter === category.id ? 'default' : 'outline'}
									className="flex items-center gap-1.5"
									onClick={() => setActiveFilter(category.id)}
								>
									{category.icon}
									{category.name}
									{activeFilter === category.id && category.id !== 'all' && (
										<span className="ml-1 rounded-full bg-background text-xs px-2 py-0.5">
											{filteredPortfolioItems.length}
										</span>
									)}
								</Button>
							))}
						</div>

						{filteredPortfolioItems.length === 0 ? (
							<div className="flex flex-col items-center justify-center py-12">
								<p className="text-muted-foreground text-lg">
									No projects found in this category.
								</p>
								<Button
									variant="outline"
									className="mt-4"
									onClick={() => setActiveFilter('all')}
								>
									View All Projects
								</Button>
							</div>
						) : (
							<div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
								{filteredPortfolioItems.map((item) => (
									<div
										key={item.id}
										className="group relative overflow-hidden rounded-lg border shadow-sm"
									>
										<div className="aspect-video overflow-hidden">
											<Image
												src={item.image || '/placeholder.svg'}
												alt={item.title}
												className="object-cover transition-all group-hover:scale-105"
												width={600}
												height={400}
											/>
										</div>
										<div className="p-4">
											<div className="flex items-center gap-2 mb-2">
												{item.icon}
												<span className="text-sm font-medium text-muted-foreground">
													{item.category}
												</span>
											</div>
											<h3 className="text-xl font-bold">{item.title}</h3>
											<p className="text-muted-foreground mt-2">
												{item.description}
											</p>
											<Button
												className="mt-4 w-full bg-[#5865F2] hover:bg-[#4752C4]"
												onClick={() => setSelectedProject(item)}
											>
												View Details
											</Button>
										</div>
									</div>
								))}
							</div>
						)}

						{activeFilter === 'all' && filteredPortfolioItems.length >= 12 && (
							<div className="flex justify-center mt-12">
								<Button variant="outline" size="lg">
									Load More Projects
								</Button>
							</div>
						)}
					</div>
				</section>
			</main>
			<footer className="w-full border-t py-6 md:py-0">
				<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
					<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
						© 2023 TheCavern Studios. All rights reserved.
					</p>
					<div className="flex gap-4">
						<Link
							href="#"
							className="text-sm font-medium hover:underline underline-offset-4"
						>
							Terms
						</Link>
						<Link
							href="#"
							className="text-sm font-medium hover:underline underline-offset-4"
						>
							Privacy
						</Link>
						<Link
							href="/"
							className="text-sm font-medium hover:underline underline-offset-4"
						>
							Home
						</Link>
					</div>
				</div>
			</footer>

			{/* Project Details Modal */}
			<Dialog
				open={selectedProject !== null}
				onOpenChange={(open) => !open && setSelectedProject(null)}
			>
				<DialogContent className="max-w-4xl w-[90vw] max-h-[80vh] overflow-hidden flex flex-col">
					<DialogHeader>
						<div className="flex items-center gap-2">
							{selectedProject?.icon}
							<DialogTitle>{selectedProject?.title}</DialogTitle>
						</div>
						<DialogDescription>{selectedProject?.category}</DialogDescription>
					</DialogHeader>

					<div className="overflow-y-auto pr-2 flex-1">
						<div className="py-4">
							<p className="text-muted-foreground mb-6">
								{selectedProject?.longDescription}
							</p>

							<h3 className="text-lg font-semibold mb-4">Project Gallery</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{selectedProject?.detailImages.map((image, index) => (
									<div
										key={index}
										className="overflow-hidden rounded-lg border"
									>
										<Image
											src={image || '/placeholder.svg'}
											alt={`${selectedProject.title} screenshot ${index + 1}`}
											className="w-full h-auto object-cover"
											width={600}
											height={400}
										/>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="mt-4 pt-4 border-t flex justify-end">
						<Button variant="outline" onClick={() => setSelectedProject(null)}>
							Close
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
