import { HomePageBestSellerDishes } from '@/components/home-page-best-seller-dishes';
import { HomePageClients } from '@/components/home-page-clients';
import { HomePageHero } from '@/components/home-page-hero';
import { HomePageTeamMembers } from '@/components/home-page-team-members';
import { HomePageTestimonials } from '@/components/home-page-testimonials';

export const HomePage = () => {
	return (
		<main>
			<HomePageHero></HomePageHero>
			<HomePageBestSellerDishes></HomePageBestSellerDishes>
			<HomePageTestimonials></HomePageTestimonials>
			<HomePageTeamMembers></HomePageTeamMembers>
			<HomePageClients></HomePageClients>
		</main>
	);
};
