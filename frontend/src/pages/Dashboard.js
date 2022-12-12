import { NewsWidget } from "features/news";
import { GoalsSnapshot } from "features/goals";
import { ImpactsSnapshot } from "features/impacts";
import { InitiativesSnapshot } from "features/initiatives";

function Dashboard() {
	return (
		<>
			<div className='container g-4'>
				<div className='row pb-2'>
					<div className='col'>
						<GoalsSnapshot />
					</div>
					<div className='col'>
						<ImpactsSnapshot />
					</div>
					<div className='col'>
						<InitiativesSnapshot />
					</div>
					<div className='col'>
						<span>Focus Score</span>
					</div>
				</div>
				<div className='row py-2'>
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
