import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export const data = {
	labels: ["Done", "To-do", "In Progress"],
	datasets: [
		{
			data: [12, 19, 3],
			backgroundColor: ["#a9c8c0", "#dc9396", "#e8d495"],
			borderColor: ["rgba(255, 255, 255, 1)"],
			borderWidth: 2,
		},
	],
};

const SnapshotCard = (props) => {
	return (
		<div className='col-3 d-flex'>
			<div className='card equal-height'>
				<div className='card-body'>
					<h6>{props.title}</h6>
					<div className='row'>
						<div className='col-6'>
							<Pie
								data={data}
								height={120}
								width={120}
								options={{
									maintainAspectRatio: false,
								}}
							/>
						</div>
						<div className='col-6 d-flex flex-column align-items-center'>
							<h6 className='total-title'>Quantity</h6>
							<p className='total-body'>
								{props.value < 10 ? ("0" + props.value).slice(-2) : props.value}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SnapshotCard;
