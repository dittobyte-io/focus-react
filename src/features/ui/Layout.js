import { SideNav } from "features/ui";
import { Header } from "features/ui";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<main className='grid-container' id='layout'>
			<section className='sidenav'>
				<SideNav />
			</section>
			<section className='header'>
				<Header />
			</section>
			<section className='body'>
				<Outlet />
			</section>
		</main>
	);
}

export default Layout;
