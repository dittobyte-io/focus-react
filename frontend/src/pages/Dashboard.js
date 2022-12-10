import { NewsWidget } from "features/news";
import GoalsSnapshot from "features/goals/GoalsSnapshot";
import ImpactsSnapshot from "features/impacts/ImpactsSnapshot";
import InitiativesSnapshot from "features/initiatives/InitiativesSnapshot";

function Dashboard() {
	return (
		<>
			<div className='container g-4 py-2'>
				<div className='row'>
					<div className='col-12'>
						<div className='row py-2'>
							<div className='col'>
								<GoalsSnapshot />
							</div>
							<div className='col'>
								<ImpactsSnapshot />
							</div>
							<div className='col'>
								<InitiativesSnapshot />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='row py2'>
				<div className='col'>
					
				</div>
				<div className='col'></div>
				<div className='col'></div>
			</div>
		</>
	);
}

export default Dashboard;
