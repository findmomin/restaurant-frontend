'use client';

import Image from 'next/image';
import { FC } from 'react';

interface Props {
	name: string;
	role: string;
	image: string;
}

export const TeamMemberCard: FC<Props> = ({ image, name, role }) => {
	return (
		<div className='text-center'>
			<div className='relative h-[310px]'>
				<Image
					src={image}
					alt={`Picture of ${name}`}
					className='object-cover'
					fill
					sizes='340px'
				/>
			</div>
			<div className='[box-shadow:0px_0px_80px_0px_#CDCDCD40] p-4'>
				<h3 className='text-[20px] font-bold leading-7 text-[#4F4F4F] mb-1'>
					{name}
				</h3>
				<p className='leading-6 text-[#828282]'>{role}</p>
			</div>
		</div>
	);
};
