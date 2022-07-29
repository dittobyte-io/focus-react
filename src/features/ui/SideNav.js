import { useState } from "react";
import logo from "features/ui/logo-hz-white.svg";
import icon from "features/ui/icon-white.svg";
import { FiArrowRightCircle } from "react-icons/fi";
import {
	BsSpeedometer,
	BsBriefcase,
	BsListCheck,
	BsCalendarWeek,
	BsFolder,
} from "react-icons/bs";

function SideNav() {
	const [isOpen, setIsOpen] = useState(true);

	function useDrawer() {
		const sideNav = document.getElementById("sidenav");
		const brand = document.getElementById("brand");
		const resizeButton = document.querySelector("#sidenav button");
		const linktext = document.querySelectorAll("#sidenav a span");

		sideNav.classList.toggle("mini");
		resizeButton.classList.toggle("closed");
		brand.classList.toggle("icon");
		linktext.forEach((linktext) => {
			linktext.classList.toggle("mini");
		});
		setIsOpen(!isOpen);
	}

	return (
		<>
			<div id='sidenav' className='sidenav'>
				<button className='drawer-button' onClick={useDrawer}>
					<FiArrowRightCircle id='drawer-button-icon' />
				</button>
				<div className='branding'>
					<img
						id='brand'
						className='brand'
						src={isOpen ? logo : icon}
						alt='Focus logo'
					/>
				</div>
				<div className='main-menu'>
					<a
						href='https://www.bbc.co.uk/programmes/b006q2x0'
						className='d-flex align-items-baseline'
					>
						<i>
							<BsSpeedometer />
						</i>
						<span>Dashboard</span>
					</a>
					<a
						href='https://www.bbc.co.uk/programmes/b006q2x0'
						className='d-flex align-items-baseline'
					>
						<i>
							<BsBriefcase />
						</i>
						<span>Projects</span>
					</a>
					<a
						href='https://www.bbc.co.uk/programmes/b006q2x0'
						className='d-flex align-items-baseline'
					>
						<i>
							<BsListCheck />
						</i>
						<span>Tasks</span>
					</a>
					<a
						href='https://www.bbc.co.uk/programmes/b006q2x0'
						className='d-flex align-items-baseline'
					>
						<i>
							<BsCalendarWeek />
						</i>
						<span>Calendar</span>
					</a>
					<a
						href='https://www.bbc.co.uk/programmes/b006q2x0'
						className='d-flex align-items-baseline'
					>
						<i>
							<BsFolder />
						</i>
						<span>File&nbsp;Manager</span>
					</a>
				</div>
			</div>
		</>
	);
}

export default SideNav;
