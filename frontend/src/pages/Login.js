import loginbg from "features/ui/svgs/target-bkgd.svg";
import { Auth } from "features/auth";

function Login() {
	return (
		<div
			id='login'
			style={{
				background: `url(${loginbg}) no-repeat center center`,
				backgroundColor: "lightslategray",
				backgroundSize: "cover",
			}}
		>
			<Auth />
		</div>
	);
}

export default Login;
