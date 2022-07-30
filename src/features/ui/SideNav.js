import logo from "features/ui/logo-hz-white.svg";
import icon from "features/ui/icon-white.svg";
import { Link } from "react-router-dom";
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
					<Link to='/' className='d-flex align-items-baseline'>
						<i>
							<BsSpeedometer />
						</i>
						<span>Dashboard</span>
					</Link>
					<Link to='/projects' className='d-flex align-items-baseline'>
						<i>
							<BsBriefcase />
						</i>
						<span>Projects</span>
					</Link>
					<Link to='/tasks' className='d-flex align-items-baseline'>
						<i>
							<BsListCheck />
						</i>
						<span>Tasks</span>
					</Link>
					<Link to='/calendar' className='d-flex align-items-baseline'>
						<i>
							<BsCalendarWeek />
						</i>
						<span>Calendar</span>
					</Link>
					<Link to='/file-manager' className='d-flex align-items-baseline'>
						<i>
							<BsFolder />
						</i>
						<span>File&nbsp;Manager</span>
					</Link>
				</div>
			</div>
		</>
	);
}

export default SideNav;
