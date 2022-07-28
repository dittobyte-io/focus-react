import { useState } from "react";
import logo from "features/ui/logo-hz-white.svg";
import icon from "features/ui/icon-white.svg";
import { FiArrowRightCircle } from "react-icons/fi";

function SideNav() {
	const [isOpen, setIsOpen] = useState(true);

	function useDrawer() {
		const sideNav = document.getElementById("sidenav");
		const resizeButton = document.querySelector("#sidenav button");

		sideNav.classList.toggle("mini");
		resizeButton.classList.toggle("closed");
		setIsOpen(!isOpen);
	}

	return (
		<>
			<div id='sidenav' className='sidenav'>
				<button className='drawer-button' onClick={useDrawer}>
					<FiArrowRightCircle id='drawer-button-icon' />
				</button>
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
			</div>
		</>
	);
}

export default SideNav;
