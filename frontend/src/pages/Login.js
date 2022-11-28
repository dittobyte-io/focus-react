import loginbg from "features/ui/svgs/target-bkgd.svg";
import { Auth } from "features/auth";
import { Link } from "react-router-dom";

function Login() {
	return (
			<>
			<div
				id="login-pg"
				className="target-bkgd default-scheme"
				style={{
				background: `url(${loginbg}) no-repeat center center`,
				backgroundColor: "lightslategray",
				backgroundSize: "cover",
				}}
			>
				<div className="pt-2 pt-sm-5 pb-4 pb-sm-4">
				<div className="container">
					<Auth />
					<div className="mt-3 row">
					<div className="text-center col">
						<p className="alt-text">
						Don't have an account?
						<a className="ms-1 alt-text" href="create-account.html">
							<b>Sign Up</b>
						</a>
						</p>
					</div>
					</div>
				</div>
				</div>
			</div>
			</>
);
}

export default Login;
