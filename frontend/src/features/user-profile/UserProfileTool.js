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
						<a href='#' className='dropdown-item'>
							View Profile
						</a>
					</li>
					<hr className='dropdown-divider my-1 mx-2' />
					<li>
						<a href='#' className='dropdown-item'>
							Logout
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default UserProfileTool;
