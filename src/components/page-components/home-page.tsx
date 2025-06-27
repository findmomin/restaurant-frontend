import { HomePageBestSellerDishes } from '@/components/home-page-best-seller-dishes';
import { HomePageHero } from '@/components/home-page-hero';

export const HomePage = () => {
	return (
		<main>
			<HomePageHero></HomePageHero>
			<HomePageBestSellerDishes></HomePageBestSellerDishes>
		</main>
	);
};
