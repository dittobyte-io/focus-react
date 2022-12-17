import { useState } from "react";

function TaskItem(props) {
	const [checked, setChecked] = useState(false);

	const handleChange = () => {
		setChecked(!checked);
	};

	return (
		<div className='list-group-item d-flex align-items-start pb-2'>
			<div className='flex-grow-1'>
				<div className='d-flex align-items-start form-check' class='taskItem'>
					<input
						class='form-check-input'
						type='checkbox'
						value=''
						id='flexCheckDefault'
						checked={checked}
						onChange={handleChange}
					/>
					<label class='form-check-label' for='flexCheckDefault'>
						<p className='d-inline-block ms-3 d-block mb-0 small'>
							{props.task}
						</p>
					</label>
				</div>
			</div>
		</div>
	);
}

export default TaskItem;
