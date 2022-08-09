import { Link } from "react-router-dom";

function UserProfileTool() {
	return (
		<>
			<div className='dropdown'>
				<button
					id='profile-tool'
					className='btn-basic'
					data-bs-toggle='dropdown'
				>
					<div className='profile-icon bg-primary'>JK</div>
				</button>
				<ul className='dropdown-menu small-dropdown py-1'>
					<li>
						<Link to='profile' className='dropdown-item'>
							View Profile
						</Link>
					</li>
					<hr className='dropdown-divider my-1 mx-2' />
					<li>
						<Link to='logout' className='dropdown-item'>
							Logout
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}

export default UserProfileTool;
