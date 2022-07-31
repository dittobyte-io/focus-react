import logo from "features/ui/logo-hz-white.svg";
import icon from "features/ui/icon-white.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
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
		const linkText = document.querySelectorAll("#drawer a span");

		linkText.forEach((linkText) => {
			linkText.classList.toggle("mini");
		});
		setIsOpen(!isOpen);
	}

	return (
		<>
			<div id='drawer' className={isOpen ? "drawer" : "drawer mini"}>
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
					<NavLink to='/'>
						<i>
							<BsSpeedometer />
						</i>
						<span>Dashboard</span>
					</NavLink>
					<NavLink to='/projects'>
						<i>
							<BsBriefcase />
						</i>
						<span>Projects</span>
					</NavLink>
					<NavLink to='/tasks'>
						<i>
							<BsListCheck />
						</i>
						<span>Tasks</span>
					</NavLink>
					<NavLink to='/calendar'>
						<i>
							<BsCalendarWeek />
						</i>
						<span>Calendar</span>
					</NavLink>
					<NavLink to='/file-manager'>
						<i>
							<BsFolder />
						</i>
						<span>File&nbsp;Manager</span>
					</NavLink>
				</div>
			</div>
		</>
	);
}

export default SideNav;
