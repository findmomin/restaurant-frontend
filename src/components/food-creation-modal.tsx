'use client';

import { cn } from '@/utils';
import { FC, useState } from 'react';
import Modal from 'react-responsive-modal';

interface Props {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export const FoodCreationModal: FC<Props> = ({ onOpenChange, open }) => {
	const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
	const [category, setCategory] = useState('');

	return (
		<Modal
			center
			classNames={{
				modal:
					'w-[300px] !bg-white/18 backdrop-blur-[30px] rounded-[16px] !shadow-none border border-white/30',
				overlay: '!bg-black/75',
			}}
			onClose={() => onOpenChange(false)}
			open={open}
			showCloseIcon={false}
		>
			<form
				className='text-white'
				onSubmit={e => {
					e.preventDefault();
				}}
			>
				<div className='text-center text-[20px] mb-5'>Add Food</div>
				<div className='space-y-2.5'>
					<input
						id='name'
						type='text'
						className='w-full h-11 rounded-[50px] py-[14px] px-4 placeholder-inherit bg-[rgba(242,242,242,0.1)] border-white/20 border'
						placeholder='Food Name'
					/>
					<div className='relative'>
						<div
							className={cn(
								'w-full max-h-11 rounded-[50px] px-4 bg-[rgba(242,242,242,0.1)] border-white/20 border relative overflow-hidden',
								isCategoryDropdownOpen && 'max-h-[400px] rounded-lg'
							)}
							onClick={() => {
								setIsCategoryDropdownOpen(prev => !prev);
							}}
						>
							<div className='mt-2.5 text-sm'>
								{!isCategoryDropdownOpen
									? category || 'Food Category'
									: 'Food Category'}
							</div>
							<ul className='py-2'>
								<li>
									<button onClick={() => setCategory('Breakfast')}>
										Breakfast
									</button>
								</li>
								<li>
									<button onClick={() => setCategory('Lunch')}>Lunch</button>
								</li>
								<li>
									<button onClick={() => setCategory('Dinner')}>Dinner</button>
								</li>
							</ul>
						</div>
					</div>
					<label
						htmlFor='image'
						className='h-11 grid place-items-center rounded-[50px] border border-dashed border-[rgba(211,51,47,1)] bg-[rgba(211,51,47,0.2)]'
					>
						Upload or Drag image here
					</label>
					<input
						type='file'
						name='image'
						id='image'
						className='hidden'
						accept='image/*'
					/>
					<button
						type='submit'
						className='w-[250px] h-11 grid place-items-center bg-[rgba(240,51,40,1)] rounded-[30px]'
					>
						Save
					</button>
				</div>
			</form>
		</Modal>
	);
};
