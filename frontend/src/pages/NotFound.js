import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className='notfound-wrapper'>
			<h1 className='display-1'>404 ERROR!</h1>
			<p className='display-5'>
				The page you are looking for no longer exists.
			</p>
			<Link to='/' className='btn btn-primary' style={{ color: "white" }}>
				Go back to Dashboard
			</Link>
		</div>
	);
}

export default NotFound;
