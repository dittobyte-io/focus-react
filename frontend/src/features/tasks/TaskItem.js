function TaskItem(props) {
	const [checked, setChecked] = React.useState(false);

	const handleChange = () => {
		setChecked(!checked);
	};

	return (
		<div className='list-group-item d-flex align-items-start'>
			<div className='flex-grow-1'>
				<div className='d-flex justify-content-between align-items-start'>
					<input
						class='form-check-input'
						type='checkbox'
						value=''
						id='flexCheckDefault'
						checked={checked}
						onChange={handleChange}
					/>
					<label class='form-check-label' for='flexCheckDefault'>
						{props.taskTitle}
					</label>
				</div>
			</div>
		</div>
	);
}

export default TaskItem;
