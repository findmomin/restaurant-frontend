'use client';

import { homePageHeroCarouselItems } from '@/constants';
import { cn } from '@/utils';
import Image from 'next/image';
import { useRef, useState } from 'react';

export const HomePageHero = () => {
	const [activeCarouselId, setActiveCarouselId] = useState(
		homePageHeroCarouselItems[0].id
	);
	const activeCarousel = homePageHeroCarouselItems.find(
		({ id }) => id === activeCarouselId
	);
	const circleRef = useRef<HTMLDivElement>(null);

	const toggleCarouselItem = (id: string) => {
		if (activeCarousel?.id === id) {
			return;
		}
		const currentItemIdx = homePageHeroCarouselItems.findIndex(
			item => item.id === activeCarousel?.id
		);
		const nextItemIdx = homePageHeroCarouselItems.findIndex(
			item => item.id === id
		);
		const direction = nextItemIdx > currentItemIdx ? 'forward' : 'backward';
		const currentRotation = +window
			.getComputedStyle(circleRef.current!, null)
			.getPropertyValue('rotate')
			.split('deg')[0];
		const nextRotation =
			direction === 'forward'
				? (currentRotation -
						Math.abs(nextItemIdx - currentItemIdx) * 90 +
						360) %
				  360
				: (currentRotation +
						Math.abs(currentItemIdx - nextItemIdx) * 90 +
						360) %
				  360;

		setActiveCarouselId(id);
		circleRef.current!.style.rotate = `${nextRotation}deg`;
	};

	return (
		<section
			style={{ background: activeCarousel?.colorPrimary }}
			className='relative p-[243px] pb-[270px] pl-[88px] transition-colors duration-1000 mt-[-161px] rounded-b-[20px] overflow-hidden'
		>
			<div
				style={{ background: activeCarousel?.colorSecondary }}
				className='absolute top-[-242px] left-[-310px] size-[1079px] rounded-full transition-colors duration-1000'
			></div>
			<div className='text-white relative z-1'>
				<h1 className='text-[96px]'>BREAKFAST</h1>
				<p className='text-[20px] font-bold max-w-[900px] -mt-3 mb-[26px]'>
					Breakfast, often referred to as the ‘most important meal of the day’,
					provides essential nutrients to kick start our day. It includes a
					variety of foods, like fruits, cereals, dairy products, and proteins,
					that contribute to a balanced diet.
				</p>
				<ul className='flex items-start gap-[18px]'>
					{homePageHeroCarouselItems.map(({ alt, height, src, width, id }) => {
						return (
							<li key={id}>
								<button
									className='grid place-items-center gap-5'
									onClick={toggleCarouselItem.bind(undefined, id)}
								>
									<Image
										src={src}
										alt={alt}
										width={width}
										height={height}
									></Image>
									<div
										className={cn(
											'w-[111px] h-1 bg-white rounded opacity-0 transition-opacity duration-1000',
											id === activeCarouselId && 'opacity-100'
										)}
									></div>
								</button>
							</li>
						);
					})}
				</ul>
			</div>
			<div
				style={{ background: activeCarousel?.colorSecondary }}
				className={cn(
					'absolute bottom-[-730px] right-[-666px] w-[1312.52px] h-[1282.4px] rotate-[50deg] rounded-full transition-[background,rotate] duration-1000'
				)}
				ref={circleRef}
			>
				<div className='w-[633px] h-[633px] absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[40%]'>
					<Image fill sizes='633px' src='/img/bowl-1.webp' alt='bowl 1'></Image>
				</div>
				<div className='w-[633px] h-[633px] absolute top-1/2 right-0 -translate-y-1/2 translate-x-[40%]'>
					<Image
						fill
						sizes='633px'
						className='object-contain'
						src='/img/bowl-3.webp'
						alt='bowl 3'
					></Image>
				</div>
				<div className='w-[633px] h-[633px] absolute top-0 right-1/2 -translate-y-[40%] translate-x-1/2'>
					<Image
						fill
						sizes='633px'
						className='object-contain'
						src='/img/bowl-2.webp'
						alt='bowl 2'
					></Image>
				</div>
				<div className='w-[633px] h-[633px] absolute bottom-0 right-1/2 translate-y-[40%] translate-x-1/2'>
					<Image
						fill
						sizes='633px'
						className='object-contain'
						src='/img/bowl-4.webp'
						alt='bowl 4'
					></Image>
				</div>
			</div>
		</section>
	);
};
