'use client';

import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import './home-page-testimonials.css';
import { useState } from 'react';
import { cn } from '@/utils';

export const HomePageTestimonials = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section>
			<div className='max-w-[1299px] mx-auto text-center flex items-center justify-between gap-4'>
				<div className='max-w-[636px] text-left'>
					<h2 className='text-[50px] font-bold leading-[120%] mb-[15px]'>
						Customer <span className='text-[#AD1519]'>Feedback</span>
					</h2>
					<div className='relative'>
						<Carousel
							activeIndex={activeIndex}
							controls={false}
							data-bs-theme='dark'
							indicators={false}
							interval={3000}
							onSelect={setActiveIndex}
							touch={true}
						>
							<Carousel.Item>
								<div className='text-[25px] leading-[130%] text-[#3D3D3D] mb-[98px]'>
									Fresh, flavorful, and just the right amount of heat. The tuna
									was buttery, the rice well-seasoned, and the chili mayo added
									a great kick. A must-try for sushi lovers.
								</div>
								<div className='flex items-center gap-[18px]'>
									<div className='size-[74px] relative'>
										<Image
											src='/img/person-1.png'
											alt='Person 1'
											fill
											sizes='74px'
										></Image>
									</div>
									<div>
										<div className='text-2xl font-bold leading-[130%] text-[#A52A2A] mb-1'>
											Tayyab Sohail
										</div>
										<div className='text-lg font-medium leading-[130%]'>
											UX/UI Designer
										</div>
									</div>
								</div>
							</Carousel.Item>
							<Carousel.Item>
								<div className='text-[25px] leading-[130%] text-[#3D3D3D] mb-[98px]'>
									Simple but delicious. The crust was perfectly crisp with a
									smoky edge, the tomatoes tasted fresh, and the mozzarella was
									melty and rich. Classic done right.
								</div>
								<div className='flex items-center gap-[18px]'>
									<div className='size-[74px] relative'>
										<Image
											src='/img/person-2.png'
											alt='Person 2'
											fill
											sizes='74px'
										></Image>
									</div>
									<div>
										<div className='text-2xl font-bold leading-[130%] text-[#A52A2A] mb-1'>
											Nafiz Salim
										</div>
										<div className='text-lg font-medium leading-[130%]'>
											Graphic Designer
										</div>
									</div>
								</div>
							</Carousel.Item>
							<Carousel.Item>
								<div className='text-[25px] leading-[130%] text-[#3D3D3D] mb-[98px]'>
									Juicy and satisfying. The patties were cooked to perfection,
									cheese melted like a dream, and the toasted brioche bun held
									it all together. Great value for a casual bite.
								</div>
								<div className='flex items-center gap-[18px]'>
									<div className='size-[74px] relative'>
										<Image
											src='/img/person-3.png'
											alt='Person 3'
											fill
											sizes='74px'
										></Image>
									</div>
									<div>
										<div className='text-2xl font-bold leading-[130%] text-[#A52A2A] mb-1'>
											Tayyab Iqbal
										</div>
										<div className='text-lg font-medium leading-[130%]'>
											Developer
										</div>
									</div>
								</div>
							</Carousel.Item>
						</Carousel>
						<div className='flex gap-[9px] absolute bottom-7 right-0'>
							<button
								className={cn(
									'size-4.5 rounded-full border border-[#A52A2A] transition-colors bg-white',
									activeIndex === 0 && 'bg-[#A52A2A]'
								)}
								onClick={setActiveIndex.bind(undefined, 0)}
							></button>
							<button
								className={cn(
									'size-4.5 rounded-full border border-[#A52A2A] transition-colors bg-white',
									activeIndex === 1 && 'bg-[#A52A2A]'
								)}
								onClick={setActiveIndex.bind(undefined, 1)}
							></button>
							<button
								className={cn(
									'size-4.5 rounded-full border border-[#A52A2A] transition-colors bg-white',
									activeIndex === 2 && 'bg-[#A52A2A]'
								)}
								onClick={setActiveIndex.bind(undefined, 2)}
							></button>
						</div>
					</div>
				</div>
				<div className='w-[590px] h-[590px] relative -mb-[1px]'>
					<Image src='/img/chef.png' alt='Chef' fill sizes='590px'></Image>
				</div>
			</div>
		</section>
	);
};
