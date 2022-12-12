import { Snapshot } from "components";
import { useGetConsultantImpactsQuery } from "./impactsSlice";

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

const ImpactsSnapshot = () => {
	let content = {};
	let consultantId = 1; // Currently the auth data only stores the email address not the user id
	const { data, isLoading, isError, error, isSuccess } =
		useGetConsultantImpactsQuery(consultantId);

	if (isLoading) {
		content = { data: [0.1], labels: ["Loading"] };
	} else if (isError) {
		content.labels = ["ERROR"];
		content.data = [0.00001]; // set to value not equal to Zero so a chart can be rendered
		content.quanity = 0;
	} else {
		var results = parseResults(data[0].data);
		content.labels = results.map((a) => a.key);
		content.data = results.map((a) => a.value);
		content.quanity = content.data.reduce((a, b) => a + b, 0);
	}
	return (
		<>
			<Snapshot
				title='Impacts'
				quanity={content.quanity}
				data={content.data}
				labels={content.labels}
			/>
		</>
	);
};

export default ImpactsSnapshot;