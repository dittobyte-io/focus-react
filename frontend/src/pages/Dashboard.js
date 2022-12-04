import { NewsWidget } from "features/news";

function Dashboard() {
	return (
		<>
			<div className='container g-4 py-2'>
				<div className='row py-2'>
					<h3>row one snap shots placeholder</h3>
				</div>
				<div className='row py2'>
					<div className='col'>
						<NewsWidget />
					</div>
					<div className='col'></div>
					<div className='col'></div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
