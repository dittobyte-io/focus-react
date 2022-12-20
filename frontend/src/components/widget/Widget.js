
function Widget(props) {
	return (
		<>
				<div className='card-header d-flex justify-content-between'>
					<div>
						<i
							className='bi bi-grip-vertical'
							data-bs-toggle='tooltip'
							data-bs-placement='top'
							title=''
							data-bs-original-title='Click &amp; Drag'
							aria-label='Click &amp; Drag'
						></i>
						<span>{props.name}</span>
					</div>
					<div className='btn-group' role='group'>
						<div className='dropdown'>
							<button
								className='option-btn'
								data-bs-toggle='dropdown'
								type='button'
							>
								<i
									className='bi bi-three-dots ms-2'
									data-bs-toggle='tooltip'
									data-bs-placement='top'
									title=''
									data-bs-original-title='Options'
									aria-label='Options'
								></i>
							</button>
							<ul className='dropdown-menu small-dropdown py-1'>
								<li>
									<a className='dropdown-item' href='#'>
										{props.dropdownItem1}
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										{props.dropdownItem2}
									</a>
								</li>
								<hr className='dropdown-divider'></hr>
								<li>
									<a className='dropdown-item' href='#'>
										{props.dropdownItem3}
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										{props.dropdownItem4}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
		</>
	);
}

export default Widget;
