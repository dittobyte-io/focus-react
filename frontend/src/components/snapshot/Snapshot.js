import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

const Snapshot = (props) => {
	const data = {
		labels: props.labels,
		datasets: [
			{
				data: props.data,
				backgroundColor:
					props.data < 1 ? ["#F8F8F8"] : ["#a9c8c0", "#dc9396", "#e8d495"],
				borderColor: ["rgba(255, 255, 255, 1)"],
				borderWidth: props.data === 0 ? 2 : 0,
			},
		],
	};

	return (
		<>
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
								{props.quanity < 10
									? ("0" + props.quanity).slice(-2)
									: props.quanity}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Snapshot;
