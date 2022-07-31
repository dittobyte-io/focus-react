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
						<span className={!isOpen && "mini"}>Dashboard</span>
					</NavLink>
					<NavLink to='/projects'>
						<i>
							<BsBriefcase />
						</i>
						<span className={!isOpen && "mini"}>Projects</span>
					</NavLink>
					<NavLink to='/tasks'>
						<i>
							<BsListCheck />
						</i>
						<span className={!isOpen && "mini"}>Tasks</span>
					</NavLink>
					<NavLink to='/calendar'>
						<i>
							<BsCalendarWeek />
						</i>
						<span className={!isOpen && "mini"}>Calendar</span>
					</NavLink>
					<NavLink to='/file-manager'>
						<i>
							<BsFolder />
						</i>
						<span className={!isOpen && "mini"}>File&nbsp;Manager</span>
					</NavLink>
				</div>
			</div>
		</>
	);
}

export default SideNav;
