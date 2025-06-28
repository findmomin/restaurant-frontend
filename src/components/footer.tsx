'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
	return (
		<footer className='bg-[#880808] text-white'>
			<div className='max-w-[1322px] mx-auto px-4 pt-[117px] pb-[93px]'>
				<div className='flex items-start justify-between gap-4'>
					<div className='flex flex-col max-w-[275px]'>
						<Link href='/' className='text-[32px] font-bold mb-[11px]'>
							RESTAURANT
						</Link>
						<p className='text-lg leading-[26px] mb-6'>
							Subscribe our newsletter and get discount 25% off
						</p>
						<form
							onSubmit={e => {
								e.preventDefault();
							}}
							className='flex mb-3'
						>
							<input
								required
								type='email'
								placeholder='Enter Your Email'
								className='w-[199px] h-10 rounded-tl-[6px] rounded-bl-[6px] bg-white placeholder-[#828282] py-[9px] px-[18px] text-black'
							/>
							<button
								type='submit'
								className='w-[43px] h-10 grid place-items-center bg-[#A52A2A] rounded-tr-[6px] rounded-br-[6px]'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='19'
									height='19'
									fill='none'
									viewBox='0 0 19 19'
								>
									<path
										fill='#fff'
										d='M16.453 2.547a.59.59 0 0 0-.623-.137L2.766 7.16a.594.594 0 0 0 0 1.11l5.1 2.037 3.765-3.776.837.837-3.782 3.782 2.042 5.1a.59.59 0 0 0 .552.375.595.595 0 0 0 .547-.392l4.75-13.063a.59.59 0 0 0-.125-.623'
									></path>
								</svg>
							</button>
						</form>
						<ul className='flex gap-4'>
							<li>
								<Link href='#'>
									<Image
										src='/img/pinterest.png'
										width={24}
										height={24}
										alt='Pinterest logo'
									></Image>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<Image
										src='/img/twitter.png'
										width={24}
										height={24}
										alt='Twitter logo'
									></Image>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<Image
										src='/img/facebook.png'
										width={24}
										height={24}
										alt='Facebook logo'
									></Image>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<Image
										src='/img/instagram.png'
										width={24}
										height={24}
										alt='Instagram logo'
									></Image>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<Image
										src='/img/youtube.png'
										width={24}
										height={24}
										alt='Youtube logo'
									></Image>
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-[20px] font-bold leading-7 mb-6'>Contact us</h3>
						<ul className='space-y-[15px] text-lg leading-[26px]'>
							<li>
								<Link
									href='https://maps.app.goo.gl/9ThybX22TnoZzexV9'
									target='_blank'
									className='flex items-center gap-2'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										fill='none'
										viewBox='0 0 24 24'
									>
										<path
											stroke='#fff'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											d='M12 13.452a3 3 0 1 0 0-6 3 3 0 0 0 0 6'
										></path>
										<path
											stroke='#fff'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											d='M19.5 10.452c0 6.75-7.5 12-7.5 12s-7.5-5.25-7.5-12a7.5 7.5 0 1 1 15 0'
										></path>
									</svg>
									3517 W. Gray St. Utica, Pennsylvania 57867
								</Link>
							</li>
							<li>
								<Link
									href='tel:(480) 555-0103'
									className='flex items-center gap-2'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										fill='none'
										viewBox='0 0 24 24'
									>
										<path
											stroke='#fff'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											d='M8.67 12.206a7.9 7.9 0 0 0 3.66 3.645.74.74 0 0 0 .735-.056l2.347-1.565a.75.75 0 0 1 .711-.065l4.391 1.882a.75.75 0 0 1 .45.778 4.5 4.5 0 0 1-4.464 3.93A12.75 12.75 0 0 1 3.75 8.005 4.5 4.5 0 0 1 7.68 3.54a.75.75 0 0 1 .778.45l1.884 4.394a.75.75 0 0 1-.062.706l-1.56 2.384a.74.74 0 0 0-.05.731'
										></path>
									</svg>
									(480) 555-0103
								</Link>
							</li>
							<li className='flex items-center gap-2'>
								<Link
									href='mailto:M.Aliyaqqut@4house.Co'
									className='flex items-center gap-2'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										fill='none'
										viewBox='0 0 24 24'
									>
										<path
											stroke='#fff'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											d='M3 9.319v9.75a.75.75 0 0 0 .75.75h16.5a.75.75 0 0 0 .75-.75v-9.75l-9-6z'
										></path>
										<path
											stroke='#fff'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='1.5'
											d='m21 9.319-7.364 5.25h-3.272L3 9.319'
										></path>
									</svg>
									M.Aliyaqqut@4house.Co
								</Link>
							</li>
							<li className='flex items-center gap-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									fill='none'
									viewBox='0 0 24 24'
								>
									<path
										stroke='#fff'
										strokeMiterlimit='10'
										strokeWidth='1.5'
										d='M12 21.1a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'
									></path>
									<path
										stroke='#fff'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='1.5'
										d='M12 6.85v5.25h5.25'
									></path>
								</svg>
								Sun - Sat / 10:00 AM - 8:00 PM
							</li>
						</ul>
					</div>

					{/* Column 3: Links */}
					<div>
						<h3 className='text-[20px] font-bold leading-7 mb-9'>Links</h3>
						<ul className='space-y-4'>
							<li>
								<Link href='#' className='leading-6'>
									About us
								</Link>
							</li>
							<li>
								<Link href='#' className='leading-6'>
									Contact Us
								</Link>
							</li>
							<li>
								<Link href='#' className='leading-6'>
									Our Menu
								</Link>
							</li>
							<li>
								<Link href='#' className='leading-6'>
									Team
								</Link>
							</li>
							<li>
								<Link href='#' className='leading-6'>
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 4: Instagram Gallery */}
					<div>
						<h3 className='text-[20px] font-bold leading-7 mb-6'>
							Instagram Gallery
						</h3>
						<div className='grid grid-cols-3 gap-2'>
							<Image
								src='/img/instagram-gallery-1.png'
								width={109}
								height={108}
								alt=''
							></Image>
							<Image
								src='/img/instagram-gallery-2.png'
								width={109}
								height={108}
								alt=''
							></Image>
							<Image
								src='/img/instagram-gallery-3.png'
								width={109}
								height={108}
								alt=''
							></Image>
							<Image
								src='/img/instagram-gallery-4.png'
								width={109}
								height={108}
								alt=''
							></Image>
							<Image
								src='/img/instagram-gallery-5.png'
								width={109}
								height={108}
								alt=''
							></Image>
							<Image
								src='/img/instagram-gallery-6.png'
								width={109}
								height={108}
								alt=''
							></Image>
						</div>
					</div>
				</div>
			</div>
			<div className='h-[68px] bg-[#A52A2A] leading-6 flex items-center'>
				<div className='max-w-[1322px] mx-auto flex items-center justify-between gap-4 w-full'>
					Copyright © 2025. All rights reserved
					<div className='flex gap-10'>
						<Link href='#'>Privacy Policy</Link>
						<Link href='#'>Term of Use</Link>
						<Link href='#'>Partner</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};
