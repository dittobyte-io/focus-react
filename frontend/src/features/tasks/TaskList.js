import TaskItem from "./TaskItem";

function TaskList(props) {
	return (
		<>
			<TaskItem task='Create spreadsheet with cost analysis of services in production dept' />
			<TaskItem task='Send marketing brochure to Rose Tyler for proofreading.' />
			<TaskItem task='Add copy to welcome page.' />
		</>
	);
}

export default TaskList;
