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

	function toggleDrawer() {
		const linktext = document.querySelectorAll("#sidenav a span");

		linktext.forEach((linktext) => {
			linktext.classList.toggle("mini");
		});
		setIsOpen(!isOpen);
	}

	return (
		<>
			<div id='sidenav' className={isOpen ? "sidenav" : "sidenav mini"}>
				<button
					className={isOpen ? "drawer-button" : "drawer-button closed"}
					onClick={toggleDrawer}
				>
					<FiArrowRightCircle id='drawer-button-icon' />
				</button>
				<div className='branding'>
					<img
						id='brand'
						className={isOpen ? "brand" : "brand icon"}
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
