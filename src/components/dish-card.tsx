import Image from 'next/image';

export const DishCard = () => {
	return (
		<div className='rounded-[18px] [box-shadow:0px_2px_4px_0px_#00000013]'>
			<div className='h-[297px] relative'>
				<Image
					src='/img/food-1.png'
					alt='Food'
					fill
					sizes='417px'
					className='object-cover'
				></Image>
			</div>
			<div className='py-[30px] px-5 pb-12'>
				<div className='flex items-center gap-4 justify-between text-[31px] font-medium leading-[120%] mb-[26px]'>
					Salad Fry
					<div className='py-2.5 px-6 rounded-[38px] bg-[#F03328] text-[20px] font-medium leading-[120%] text-white'>
						Breakfast
					</div>
				</div>
				<div className='flex items-center gap-4 justify-between'>
					<div className='flex gap-1.5'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='none'
							viewBox='0 0 24 24'
						>
							<path
								fill='#FF9E0C'
								fillRule='evenodd'
								d='M10.788 3.71c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.854 7.373 21.68c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z'
								clipRule='evenodd'
							></path>
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='none'
							viewBox='0 0 24 24'
						>
							<path
								fill='#FF9E0C'
								fillRule='evenodd'
								d='M10.788 3.71c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.854 7.373 21.68c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z'
								clipRule='evenodd'
							></path>
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='none'
							viewBox='0 0 24 24'
						>
							<path
								fill='#FF9E0C'
								fillRule='evenodd'
								d='M10.788 3.71c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.854 7.373 21.68c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z'
								clipRule='evenodd'
							></path>
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='none'
							viewBox='0 0 24 24'
						>
							<path
								fill='#FF9E0C'
								fillRule='evenodd'
								d='M10.788 3.71c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.854 7.373 21.68c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z'
								clipRule='evenodd'
							></path>
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='none'
							viewBox='0 0 24 24'
						>
							<path
								fill='#FF9E0C'
								fillRule='evenodd'
								d='M10.788 3.71c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.854 7.373 21.68c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z'
								clipRule='evenodd'
							></path>
						</svg>
					</div>
					<div className='text-[34px] font-bold leading-[120%]'>$230</div>
				</div>
			</div>
		</div>
	);
};
