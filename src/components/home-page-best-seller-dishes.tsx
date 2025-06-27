'use client';

import { CategoryCreationModal } from '@/components/category-creation-modal';
import { DishCard } from '@/components/dish-card';
import { FoodCreationModal } from '@/components/food-creation-modal';
import { cn } from '@/utils';
import { useState } from 'react';

export const HomePageBestSellerDishes = () => {
	const [tab, setTab] = useState('all');
	const [isCategoryCreationModalOpen, setIsCategoryCreationModalOpen] =
		useState(false);
	const [isFoodCreationModalOpen, setIsFoodCreationModalOpen] = useState(false);

	return (
		<section className='pt-[150px]'>
			<div className='max-w-[1299px] mx-auto text-center'>
				<h2 className='text-[55px] font-bold leading-[120%] text-[#1F1F1F] text-center mb-4.5'>
					Our best Seller Dishes
				</h2>
				<p className='text-[25px] leading-[120%] text-[#5C5C5C] max-w-[852px] mx-auto mb-17'>
					Our fresh garden salad is a light and refreshing option. It features a
					mix of crisp lettuce, juicy tomatoe all tossed in your choice of
					dressing.
				</p>
				<div className='flex gap-4 justify-between mb-17'>
					<div className='flex gap-5'>
						<button
							className={cn(
								'h-16 py-[15px] px-[30px] rounded-[45px] border border-[#BABABA] text-[28px] leading-[120%] transition-colors',
								tab === 'all' && 'text-white bg-[#2C2C2C]'
							)}
							onClick={() => {
								setTab('all');
							}}
						>
							All
						</button>
						<button
							className={cn(
								'h-16 py-[15px] px-[30px] rounded-[45px] border border-[#BABABA] text-[28px] leading-[120%] transition-colors',
								tab === 'breakfast' && 'text-white bg-[#2C2C2C]'
							)}
							onClick={() => {
								setTab('breakfast');
							}}
						>
							Breakfast
						</button>
						<button
							className={cn(
								'h-16 py-[15px] px-[30px] rounded-[45px] border border-[#BABABA] text-[28px] leading-[120%] transition-colors',
								tab === 'lunch' && 'text-white bg-[#2C2C2C]'
							)}
							onClick={() => {
								setTab('lunch');
							}}
						>
							Lunch
						</button>
						<button
							className={cn(
								'h-16 py-[15px] px-[30px] rounded-[45px] border border-[#BABABA] text-[28px] leading-[120%] transition-colors',
								tab === 'dinner' && 'text-white bg-[#2C2C2C]'
							)}
							onClick={() => {
								setTab('dinner');
							}}
						>
							Dinner
						</button>
					</div>
					<div className='flex gap-2.5'>
						<button
							className='h-16 py-[15px] px-[30px] rounded-[45px] border border-[#BABABA] text-[28px] leading-[120%] text-white bg-[#2C2C2C] transition-colors'
							onClick={() => {
								setIsFoodCreationModalOpen(true);
							}}
						>
							Add Food
						</button>
						<button
							className='h-16 py-[15px] px-[30px] rounded-[45px] border border-[#BABABA] text-[28px] leading-[120%] text-white bg-[#2C2C2C] transition-colors'
							onClick={() => {
								setIsCategoryCreationModalOpen(true);
							}}
						>
							Add Category
						</button>
					</div>
				</div>
				<ul className='flex flex-wrap justify-center gap-x-[25px] gap-y-16'>
					{tab === 'all' ? (
						<>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
						</>
					) : tab === 'breakfast' ? (
						<>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
						</>
					) : tab === 'lunch' ? (
						<>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
						</>
					) : tab === 'dinner' ? (
						<>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
							<li className='w-[416px]'>
								<DishCard></DishCard>
							</li>
						</>
					) : null}
				</ul>
			</div>
			<CategoryCreationModal
				open={isCategoryCreationModalOpen}
				onOpenChange={setIsCategoryCreationModalOpen}
			></CategoryCreationModal>
			<FoodCreationModal
				open={isFoodCreationModalOpen}
				onOpenChange={setIsFoodCreationModalOpen}
			></FoodCreationModal>
		</section>
	);
};
