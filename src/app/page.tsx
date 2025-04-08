import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	ArrowRight,
	Bot,
	Code,
	Compass,
	Gamepad2,
	Layout,
	Server,
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
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
						<Link href="#discord">Join Our Discord</Link>
					</Button>
				</div>
			</header>
			<main className="flex-1">
				<section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-background/80">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										Discord & Minecraft Solutions Crafted in The Cavern
									</h1>
									<p className="max-w-[600px] text-muted-foreground md:text-xl">
										We build exceptional Discord Bots, Servers, Layouts, and
										Minecraft Plugins that enhance your gaming and community
										experience.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Button asChild size="lg">
										<Link href="/portfolio">
											View Our Work <ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
									<Button asChild variant="outline" size="lg">
										<Link href="#services">Our Services</Link>
									</Button>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]">
									<div className="absolute inset-0 bg-gradient-to-r from-[#5865F2] to-[#9B84EC] rounded-lg opacity-20 blur-3xl"></div>
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="grid grid-cols-2 gap-4 p-4">
											<div className="flex h-32 w-32 items-center justify-center rounded-lg bg-background/50 backdrop-blur-lg border shadow-lg">
												<Bot className="h-12 w-12 text-[#5865F2]" />
											</div>
											<div className="flex h-32 w-32 items-center justify-center rounded-lg bg-background/50 backdrop-blur-lg border shadow-lg">
												<Server className="h-12 w-12 text-[#5865F2]" />
											</div>
											<div className="flex h-32 w-32 items-center justify-center rounded-lg bg-background/50 backdrop-blur-lg border shadow-lg">
												<Layout className="h-12 w-12 text-[#5865F2]" />
											</div>
											<div className="flex h-32 w-32 items-center justify-center rounded-lg bg-background/50 backdrop-blur-lg border shadow-lg">
												<Gamepad2 className="h-12 w-12 text-[#5865F2]" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="services"
					className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
				>
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
									Services
								</div>
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
									What We Offer
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Our comprehensive range of Discord and Minecraft services
									designed to elevate your gaming community
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5865F2]/10">
									<Bot className="h-8 w-8 text-[#5865F2]" />
								</div>
								<h3 className="text-xl font-bold">Discord Bots</h3>
								<p className="text-center text-muted-foreground">
									Custom Discord bots with moderation, music, games, and utility
									features to enhance your server.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5865F2]/10">
									<Server className="h-8 w-8 text-[#5865F2]" />
								</div>
								<h3 className="text-xl font-bold">Discord Servers</h3>
								<p className="text-center text-muted-foreground">
									Professionally designed Discord server setups with channels,
									roles, permissions, and automation.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5865F2]/10">
									<Layout className="h-8 w-8 text-[#5865F2]" />
								</div>
								<h3 className="text-xl font-bold">Discord Layouts</h3>
								<p className="text-center text-muted-foreground">
									Custom Discord layouts and themes to give your server a unique
									and professional appearance.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5865F2]/10">
									<Gamepad2 className="h-8 w-8 text-[#5865F2]" />
								</div>
								<h3 className="text-xl font-bold">Minecraft Plugins</h3>
								<p className="text-center text-muted-foreground">
									Custom Minecraft plugins and mods to enhance gameplay, add
									features, and improve server management.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5865F2]/10">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="h-8 w-8 text-[#5865F2]"
									>
										<rect width="18" height="18" x="3" y="3" rx="2" />
										<path d="M7 7h10" />
										<path d="M7 12h10" />
										<path d="M7 17h10" />
									</svg>
								</div>
								<h3 className="text-xl font-bold">Server Management</h3>
								<p className="text-center text-muted-foreground">
									Ongoing management and moderation services for Discord servers
									and Minecraft communities.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5865F2]/10">
									<Code className="h-8 w-8 text-[#5865F2]" />
								</div>
								<h3 className="text-xl font-bold">Custom Development</h3>
								<p className="text-center text-muted-foreground">
									Bespoke development solutions for unique Discord and Minecraft
									requirements.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section id="about" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
										About Us
									</div>
									<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
										The Story Behind TheCavern
									</h2>
									<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
										Founded by passionate gamers and developers, TheCavern
										Studios has grown into a specialized Discord and Minecraft
										development team.
									</p>
								</div>
								<div className="space-y-4">
									<p className="text-muted-foreground">
										Our mission is to create exceptional Discord and Minecraft
										experiences that bring communities together and enhance
										gameplay. We believe in the power of gaming to connect
										people and build lasting relationships.
									</p>
									<p className="text-muted-foreground">
										With a team of experienced developers who are also avid
										gamers, we understand the unique needs of gaming
										communities. Our collaborative approach ensures that we
										deliver solutions that exceed expectations and create
										engaging experiences for players and community members.
									</p>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]">
									<div className="absolute inset-0 bg-gradient-to-r from-[#5865F2] to-[#9B84EC] rounded-lg opacity-20 blur-3xl"></div>
									<div className="absolute inset-0 flex items-center justify-center">
										<Image
											src="/img/thecavern.png"
											alt="TheCavern Studios Team"
											className="rounded-lg border shadow-lg"
											width={500}
											height={500}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="discord"
					className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
				>
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
									Join Us
								</div>
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
									Connect With Us On Discord
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Join our Discord server to discuss your project, get support,
									or just hang out with our community
								</p>
							</div>
							<div className="mx-auto max-w-sm py-8">
								<div className="flex flex-col items-center justify-center space-y-4 rounded-xl bg-card p-8 shadow-lg">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="80"
										height="80"
										viewBox="0 0 127.14 96.36"
										className="text-[#5865F2]"
									>
										<path
											fill="#5865F2"
											d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
										/>
									</svg>
									<h3 className="text-2xl font-bold">TheCavern Studios</h3>
									<p className="text-muted-foreground">
										Join our community of developers and gamers
									</p>
									<Button
										asChild
										size="lg"
										className="w-full bg-[#5865F2] hover:bg-[#4752C4]"
									>
										<Link href="https://discord.gg/AHmpxE5fYq" target="_blank">Join Our Discord Server</Link>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
									Ready to Get Started?
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Check out our portfolio to see our previous work or join our
									Discord to discuss your project
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Button asChild size="lg">
									<Link href="/portfolio">
										View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
								<Button asChild variant="outline" size="lg">
									<Link href="#discord">Join Discord</Link>
								</Button>
							</div>
						</div>
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
							href="/portfolio"
							className="text-sm font-medium hover:underline underline-offset-4"
						>
							Portfolio
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
