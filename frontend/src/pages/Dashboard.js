import { useState } from "react";
import { SnapshotCard } from "features/snapshot";

import {
	useGetOverallGoalsQuery,
	useGetOverallImpactsQuery,
	useGetOverallInitiativesQuery,
} from "../features/snapshot/snapshotApiSlice";

function Dashboard() {
	const [overallGoals, setOverallGoals] = useState("");
	const [overallImpacts, setOverallImpacts] = useState("");
	const [overallInitiatives, setOverallInitiatives] = useState("");

	const {
		data: goals,
		isSuccess: goalsLoaded,
		isError: isGoalsError,
		error: goalsErrorMsg,
	} = useGetOverallGoalsQuery();
	const {
		data: impacts,
		isSuccess: impactsLoaded,
		isError: isImpactsError,
		error: impactsErrorMsg,
	} = useGetOverallImpactsQuery();
	const {
		data: initiatives,
		isSuccess: initiativesLoaded,
		isError: isInitiativesError,
		error: initiativesErrorMsg,
	} = useGetOverallInitiativesQuery();

	return (
		<>
			{/*	<h1 style={{ margin: "0" }}>Dashboard</h1> */}
			<div className='container g-4 py-2'>
				<div className='row'>
					<div className='col-12'>
						<div className='row py-2'>
							<SnapshotCard title='Goals' value='00' />

							<SnapshotCard title='Initiatives' value='03' />

							<SnapshotCard title='Impacts' value='11' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
