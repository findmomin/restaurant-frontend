import { TeamMemberCard } from '@/components/team-member-card';
import Image from 'next/image';

const teamMembers = [
	{
		name: 'Mark Henry',
		role: 'Owner',
		image: '/img/team-member-1.png',
	},
	{
		name: 'Lucky Helen',
		role: 'Chef',
		image: '/img/team-member-1.png',
	},
	{
		name: 'Moon Henry',
		role: 'Founder',
		image: '/img/team-member-1.png',
	},
	{
		name: 'Tom Monrow',
		role: 'Specialist',
		image: '/img/team-member-1.png',
	},
];

export const HomePageTeamMembers = () => {
	return (
		<section className='pb-[calc(226px+60px)]'>
			<div className='h-[460px] pt-[120px] text-center text-white relative'>
				<Image
					src='/img/food-banner.png'
					alt='Food banner'
					fill
					sizes='1920px'
				></Image>
				<Image
					src='/img/team-members-overlay.png'
					alt='Overlay'
					fill
					sizes='1920px'
				></Image>
				<div className='relative z-1'>
					<h2 className='text-5xl font-bold leading-[56px] mb-2'>
						Team Member
					</h2>
					<p className='leading-6 max-w-[442px] mx-auto mb-14'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
						pharetra dictum neque massa congue.
					</p>
					<div className='grid grid-cols-4 gap-6 max-w-[1299px] mx-auto'>
						{teamMembers.map((member, i) => (
							<TeamMemberCard key={i} {...member} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
