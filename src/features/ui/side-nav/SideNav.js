import { useEffect, useState } from "react";
import logo from "features/ui/side-nav/logo-hz-white.svg";
import icon from "features/ui/side-nav/icon-white.svg";

function SideNav() {
	const [isOpen, setIsOpen] = useState(true);

	function setClass() {
		const sideNav = document.getElementById("sidenav");
		// const menuText = document.querySelectorAll("#sidenav a span");
		const resizeButton = document.querySelector("#resize button");

		sideNav.classList.toggle("mini");
		resizeButton.classList.toggle("closed");
		setIsOpen(!isOpen);
	}

	return (
		<>
			<div id='sidenav' className='sidenav'>
				<div className='branding'>
					<img id='logo' src={isOpen ? logo : icon} />
				</div>
				<div className='main-menu'>
					<a href='#' className='d-flex align-items-center'>
						<span>Dashboard</span>
					</a>
					<a href='#' className='d-flex align-items-center'>
						<span>Projects</span>
					</a>
					<a href='#' className='d-flex align-items-center'>
						<span>Tasks</span>
					</a>
					<a href='#' className='d-flex align-items-center'>
						<span>Calendar</span>
					</a>
					<a href='#' className='d-flex align-items-center'>
						<span>File&nbsp;Manager</span>
					</a>
				</div>
				<div id='resize'>
					<button className='btn btn-secondary' onClick={setClass}>
						click
					</button>
				</div>
			</div>
		</>
	);
}

export default SideNav;
