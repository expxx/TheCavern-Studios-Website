'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { ArrowLeft, Compass, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Reviews() {
	// State to track which review is being viewed
	const [selectedReview, setSelectedReview] = useState<
		null | (typeof reviews)[number]
	>(null);

	// Sample reviews data - replace with your actual reviews
	const reviews = [
		{
			id: 1,
			name: 'Vexis',
			company: 'Individual',
			avatar: '/img/reviews/av/vexis.png',
			rating: 5,
			shortReview:
				'great bot, great price, great support. 10/10 would recommend',
			fullReview:
				"great bot, great price, great support. 10/10 would recommend." 
		},
		{
			id: 2,
			name: 'Pixel',
			company: 'Individual',
			avatar: '/img/reviews/av/pixel.png',
			rating: 5,
			shortReview:
				'AMAZING TEAM!',
			fullReview:
				"AMAZING TEAM!"
		},
		{
			id: 3,
			name: 'BradODaCat',
			company: 'Individual',
			avatar: '/img/reviews/av/bradodacat.png',
			rating: 5,
			shortReview:
				'*Only star rating was provided*',
			fullReview:
				"*Only star rating was provided*"
		},
		{
			id: 4,
			name: 'Seteea',
			company: 'Individual',
			avatar: '/img/reviews/av/seteea.png',
			rating: 4,
			shortReview:
				'Very satisfied, just one small issue that got resolved quickly',
			fullReview:
				"Very satisfied, just one small issue that got resolved quickly"
		},
		{
			id: 5,
			name: 'Synth',
			company: 'Individual',
			avatar: '/img/reviews/av/synth.png',
			rating: 3,
			shortReview:
				'works fine, but the setup was confusing. Once its running its good just needs better instruction',
			fullReview:
				"works fine, but the setup was confusing. Once its running its good just needs better instruction"
		},
		{
			id: 6,
			name: 'abderl',
			company: 'Individual',
			avatar: '/img/reviews/av/abderl.png',
			rating: 3,
			shortReview:
				'works fine, but the setup was confusing. Once its running its good just needs better instruction',
			fullReview:
				"works fine, but the setup was confusing. Once its running its good just needs better instruction"
		},
		{
			id: 7,
			name: 'MrCarMan',
			company: 'Individual',
			avatar: '/img/reviews/av/mrcarman.png',
			rating: 4,
			shortReview:
				'*Only star rating was provided*',
			fullReview:
				"*Only star rating was provided*"
		},
	];

	// Function to render star ratings
	const renderStars = (rating: number) => {
		return Array(5)
			.fill(0)
			.map((_, i) => (
				<Star
					key={i}
					className={`h-4 w-4 ${
						i < rating
							? 'fill-[#FFD700] text-[#FFD700]'
							: 'fill-muted text-muted'
					}`}
				/>
			));
	};

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
									Client Reviews
								</h1>
								<p className="max-w-[900px] text-muted-foreground md:text-xl">
									See what our clients have to say about working with TheCavern
									Studios.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
							{reviews.map((review) => (
								<div
									key={review.id}
									className="flex flex-col h-full rounded-lg border shadow-sm overflow-hidden cursor-pointer hover:border-[#5865F2] transition-colors"
									onClick={() => setSelectedReview(review)}
								>
									<div className="flex flex-col h-full p-6">
										<div className="flex items-center gap-4 mb-4">
											<Avatar className="h-12 w-12 border">
												<AvatarImage src={review.avatar} alt={review.name} />
												<AvatarFallback>
													{review.name
														.split(' ')
														.map((n) => n[0])
														.join('')}
												</AvatarFallback>
											</Avatar>
											<div>
												<h3 className="font-semibold">{review.name}</h3>
												<p className="text-sm text-muted-foreground">
													{review.company}
												</p>
											</div>
										</div>
										<div className="flex mb-3">
											{renderStars(review.rating)}
										</div>
										<p className="text-muted-foreground flex-grow line-clamp-4">
											{review.shortReview}
										</p>
										<Button
											variant="link"
											className="mt-4 p-0 h-auto text-[#5865F2] justify-start"
											onClick={(e) => {
												e.stopPropagation();
												setSelectedReview(review);
											}}
										>
											Read full review
										</Button>
									</div>
								</div>
							))}
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
							href="/"
							className="text-sm font-medium hover:underline underline-offset-4"
						>
							Home
						</Link>
					</div>
				</div>
			</footer>

			{/* Review Details Modal */}
			<Dialog
				open={selectedReview !== null}
				onOpenChange={(open) => !open && setSelectedReview(null)}
			>
				<DialogContent className="max-w-2xl w-[90vw] max-h-[80vh] overflow-hidden flex flex-col">
					<DialogHeader>
						<DialogTitle>Client Review</DialogTitle>
					</DialogHeader>

					<div className="overflow-y-auto pr-2 flex-1">
						{selectedReview && (
							<div className="py-4">
								<div className="flex items-start gap-4 mb-6">
									<Avatar className="h-16 w-16 border">
										<AvatarImage
											src={selectedReview.avatar}
											alt={selectedReview.name}
										/>
										<AvatarFallback>
											{selectedReview.name
												.split(' ')
												.map((n) => n[0])
												.join('')}
										</AvatarFallback>
									</Avatar>
									<div>
										<h3 className="text-xl font-bold">{selectedReview.name}</h3>
										<p className="text-muted-foreground">
											{selectedReview.company}
										</p>
										<div className="flex mt-2">
											{renderStars(selectedReview.rating)}
										</div>
									</div>
								</div>

								<div className="space-y-4">
									<p className="text-muted-foreground leading-relaxed">
										{selectedReview.fullReview}
									</p>
								</div>
							</div>
						)}
					</div>

					<div className="mt-4 pt-4 border-t flex justify-end">
						<Button variant="outline" onClick={() => setSelectedReview(null)}>
							Close
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
