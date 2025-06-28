'use client';

import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const HomePageClients = () => {
	return (
		<section className='py-[120px]'>
			<div className='max-w-[1349px] mx-auto text-center'>
				<div className='text-lg leading-[26px] text-[#A52A2A] mb-2'>
					Partners & Clients
				</div>
				<div className='text-5xl font-bold leading-14 text-[#333333] mb-[55px]'>
					We work with the best pepole
				</div>
				<div className='h-[128px] overflow-hidden'>
					<Slider
						{...{
							dots: false,
							infinite: true,
							slidesToShow: 3,
							slidesToScroll: 1,
							autoplay: true,
							speed: 2000,
							autoplaySpeed: 0,
							cssEase: 'linear',
							draggable: false,
							pauseOnHover: false,
							rtl: true,
							variableWidth: true,
						}}
					>
						<div
							className='h-[128px] w-[239px] relative'
							style={{ width: 'calc(239px + 72px)' }}
						>
							<Image
								src='/img/client-1.png'
								alt='Client 1'
								fill
								sizes='250px'
								className='object-contain'
							></Image>
						</div>
						<div
							className='h-[128px] w-[164px] relative'
							style={{ width: 'calc(164px + 72px)' }}
						>
							<Image
								src='/img/client-2.png'
								alt='Client 2'
								fill
								sizes='250px'
								className='object-contain'
							></Image>
						</div>
						<div
							className='h-[128px] w-[145px] relative'
							style={{ width: 'calc(145px + 72px)' }}
						>
							<Image
								src='/img/client-3.png'
								alt='Client 3'
								fill
								sizes='250px'
								className='object-contain'
							></Image>
						</div>
						<div
							className='h-[128px] w-[129px] relative'
							style={{ width: 'calc(129px + 72px)' }}
						>
							<Image
								src='/img/client-4.png'
								alt='Client 4'
								fill
								sizes='250px'
								className='object-contain'
							></Image>
						</div>
						<div
							className='h-[128px] w-[168px] relative'
							style={{ width: 'calc(168px + 72px)' }}
						>
							<Image
								src='/img/client-5.png'
								alt='Client 5'
								fill
								sizes='250px'
								className='object-contain'
							></Image>
						</div>
						<div
							className='h-[128px] w-[113px] relative'
							style={{ width: 'calc(113px + 72px)' }}
						>
							<Image
								src='/img/client-6.png'
								alt='Client 6'
								fill
								sizes='250px'
								className='object-contain'
							></Image>
						</div>
					</Slider>
				</div>
			</div>
		</section>
	);
};
