import TaskList from "./TaskList";
import { useGetMyTasksQuery, useUpdateTaskMutation } from "./tasksSlice";

function TasksWidget() {
	let consultantId = 1; // Currently the auth data only stores the email address not the user id
	const {
		data: myTask,
		isLoading,
		isError,
		error,
	} = useGetMyTasksQuery(consultantId);

	const {} = useUpdateTaskMutation();
	return (
		<>
			<div className='card dashboard-widget'>
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
						<span>Tasks</span>
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
										Filter
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Taskboard
									</a>
								</li>
								<hr className='dropdown-divider'></hr>
								<li>
									<a className='dropdown-item' href='#'>
										Style
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Reset
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='card-body'>
					<TaskList />
				</div>
			</div>
		</>
	);
}

export default TasksWidget;
