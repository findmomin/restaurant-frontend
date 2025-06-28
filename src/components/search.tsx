'use client';

import { cn } from '@/utils';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export const Search = () => {
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleInputFocus = () => {
		setIsPopoverOpen(true);
	};

	const handleInputBlur = () => {
		setIsPopoverOpen(false);
	};

	useEffect(() => {
		const handleKeypress = (e: globalThis.KeyboardEvent) => {
			if (e.key === 'Escape') {
				setIsPopoverOpen(false);
				inputRef.current?.blur();
			}
		};

		document.addEventListener('keydown', handleKeypress);

		return () => {
			document.removeEventListener('keydown', handleKeypress);
		};
	}, []);

	return (
		<div className='relative'>
			<div className='relative z-1'>
				<svg
					className='absolute top-2.25 left-5 pointer-events-none'
					xmlns='http://www.w3.org/2000/svg'
					width='42'
					height='42'
					fill='none'
					viewBox='0 0 42 42'
				>
					<path
						stroke='#414141'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='m35 35-7.088-7.087m0 0a12.252 12.252 0 1 0-17.326-17.327 12.252 12.252 0 0 0 17.326 17.327'
					></path>
				</svg>
				<input
					id='search'
					type='search'
					className='w-205.25 h-15.25 py-3.5 px-4 text-2xl font-semibold text-[#2D2D2D] placeholder-inherit pl-25.5 rounded-[20px] bg-white'
					placeholder='Search....'
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
					ref={inputRef}
				/>
			</div>
			<div
				className={cn(
					'absolute top-0 left-0 w-full pt-15.25 bg-white rounded-[20px] max-h-15.25 overflow-hidden transition-[max-height] duration-1000',
					isPopoverOpen && 'max-h-100'
				)}
			>
				<div
					className={cn(
						'h-0.5 w-full bg-[#D9D9D9] opacity-0 transition-opacity duration-1000',
						isPopoverOpen && 'opacity-100'
					)}
				></div>
				<ul className='max-h-[calc(400px-61px)] overflow-y-auto py-6.25 px-6.75 grid gap-2.5'>
					{new Array(4).fill(null).map((_, i) => {
						return (
							<button
								key={i}
								className={cn(
									'flex items-center gap-7.25 opacity-0 duration-1000 transition-opacity',
									isPopoverOpen && 'opacity-100'
								)}
								style={{ transitionDelay: `${(i + 1) * 250}ms` }}
							>
								<div className='w-[82px] h-[58.4px] relative'>
									<Image
										src='/img/food-1.png'
										fill
										className='object-cover'
										sizes='82px'
										alt=''
									></Image>
								</div>
								<div className='text-[20px] font-medium text-[#2D2D2D]'>
									Chicken Breast
								</div>
							</button>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
