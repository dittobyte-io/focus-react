import { useState } from "react";
import logo from "features/ui/logo-hz-white.svg";
import icon from "features/ui/icon-white.svg";

function SideNav() {
	const [isOpen, setIsOpen] = useState(true);

	function useDrawer() {
		const sideNav = document.getElementById("sidenav");
		const resizeButton = document.querySelector("#resize button");

		sideNav.classList.toggle("mini");
		resizeButton.classList.toggle("closed");
		setIsOpen(!isOpen);
	}

	return (
		<>
			<div id='sidenav' className='sidenav'>
				<div className='branding'>
					<img id='logo' src={isOpen ? logo : icon} alt='Focus logo' />
				</div>
				<div className='main-menu'>
					<a
						href='https://www.bbc.co.uk/programmes/b006q2x0'
						className='d-flex align-items-center'
					>
						<span>Dashboard</span>
					</a>
					<a
						href='https://www.bbc.co.uk/programmes/b006q2x0'
						className='d-flex align-items-center'
					>
						<span>Projects</span>
					</a>
					<a
						href='https://www.bbc.co.uk/programmes/b006q2x0'
						className='d-flex align-items-center'
					>
						<span>Tasks</span>
					</a>
					<a
						href='https://www.bbc.co.uk/programmes/b006q2x0'
						className='d-flex align-items-center'
					>
						<span>Calendar</span>
					</a>
					<a
						href='https://www.bbc.co.uk/programmes/b006q2x0'
						className='d-flex align-items-center'
					>
						<span>File&nbsp;Manager</span>
					</a>
				</div>
				<div id='resize'>
					<button className='btn btn-secondary' onClick={useDrawer}>
						click
					</button>
				</div>
			</div>
		</>
	);
}

export default SideNav;
