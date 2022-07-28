import { SideNav } from "features/ui";
import { Header } from "features/ui";

function Layout({ children }) {
	return (
		<main className='grid-container' id='layout'>
			<section className='side-nav'>
				<SideNav />
			</section>
			<section className='header'>
				<Header />
			</section>
			<section className='body'>{children}</section>
		</main>
	);
}

export default Layout;
