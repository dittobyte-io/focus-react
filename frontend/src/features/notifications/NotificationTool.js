import { BsBell } from "react-icons/bs";

function NotificationTool() {
	return (
		<div>
			<div className='dropdown'>
				<button
					id='notification-tool'
					className='btn-basic position-relative'
					data-bs-toggle='dropdown'
					aria-expanded='false'
				>
					<BsBell />
					<span className='badge single translate-middle bg-danger border border-light rounded-circle'>
						<span className='notification-text'>3</span>
					</span>
				</button>
			</div>
		</div>
	);
}

export default NotificationTool;
// TODO: evaluate margin on txt span element vs padding on badge element
