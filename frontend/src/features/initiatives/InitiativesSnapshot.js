import { SnapshotCard } from "components/snapshot";
import { useGetConsultantInitiativesQuery } from "./initiativesSlice";

// Move to a Helper function
function parseResults(array) {
	var r = [],
		o = {};
	array.forEach(function (goal) {
		if (!o[goal.stage]) {
			o[goal.stage] = { key: goal.stage, value: 0 };
			r.push(o[goal.stage]);
		}
		o[goal.stage].value++;
	});
	return r;
}

const InitiativesSnapshot = () => {
	let content = {};
	let consultantId = 1; // Currently the auth data only stores the email address not the user id
	const { data, isLoading, isError, error, isSuccess } =
		useGetConsultantInitiativesQuery(consultantId);

	if (isLoading) {
		content = { data: [0.1], labels: ["Loading"] };
	} else if (isError) {
		content.labels = ["ERROR"];
		content.data = [0.1];
		content.quanity = 0;
	} else {
		var results = parseResults(data[0].data);
		content.labels = results.map((a) => a.key);
		content.data = results.map((a) => a.value);
		content.quanity = content.data.reduce((a, b) => a + b, 0);
	}
	return (
		<>
			<SnapshotCard
				title='Initiatives'
				quanity={content.quanity}
				data={content.data}
				labels={content.labels}
			/>
		</>
	);
};

export default InitiativesSnapshot;
