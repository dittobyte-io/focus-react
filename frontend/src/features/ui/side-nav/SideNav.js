import logo from "features/ui/svgs/logo-hz-white.svg";
import icon from "features/ui/svgs/icon-white.svg";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "features/ui/side-nav/drawerSlice";
import { FiArrowRightCircle } from "react-icons/fi";
import {
	BsSpeedometer,
	BsBriefcase,
	BsListCheck,
	BsCalendarWeek,
	BsFolder,
} from "react-icons/bs";

function SideNav() {
	const isOpen = useSelector((state) => state.drawer.position);
	const dispatch = useDispatch();

	return (
		<>
			<div id='drawer' className={isOpen ? "drawer" : "drawer mini"}>
				<button
					className={isOpen ? "drawer-button" : "drawer-button closed"}
					onClick={() => dispatch(toggle())}
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
						<span className={isOpen ? undefined : "mini"}>Dashboard</span>
					</NavLink>
					<NavLink to='/projects'>
						<i>
							<BsBriefcase />
						</i>
						<span className={isOpen ? undefined : "mini"}>Projects</span>
					</NavLink>
					<NavLink to='/tasks'>
						<i>
							<BsListCheck />
						</i>
						<span className={isOpen ? undefined : "mini"}>Tasks</span>
					</NavLink>
					<NavLink to='/calendar'>
						<i>
							<BsCalendarWeek />
						</i>
						<span className={isOpen ? undefined : "mini"}>Calendar</span>
					</NavLink>
					<NavLink to='/file-manager'>
						<i>
							<BsFolder />
						</i>
						<span className={isOpen ? undefined : "mini"}>
							File&nbsp;Manager
						</span>
					</NavLink>
				</div>
			</div>
		</>
	);
}

export default SideNav;
