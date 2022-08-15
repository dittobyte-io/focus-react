import svg from "features/ui/svgs/404.svg";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className='not-found-wrapper'>
			<h2>404 Error!</h2>
			<img src={svg} />
			<Link to='/' className='btn btn-primary' style={{ color: "white" }}>
				Go back to Dashboard
			</Link>
		</div>
	);
}

export default NotFound;
