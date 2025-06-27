import { Search } from '@/components/search';
import Link from 'next/link';

export const Nav = () => {
	return (
		<nav className='py-12.5 px-15 pl-16.25 flex items-center justify-between gap-4 relative z-1'>
			<Link href='/' className='text-[32px] text-white font-bold'>
				RESTAURANT
			</Link>
			<Search></Search>
		</nav>
	);
};
