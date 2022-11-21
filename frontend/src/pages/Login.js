import loginbg from "features/ui/svgs/target-bkgd.svg";
import { Auth } from "features/auth";
import { Link } from "react-router-dom";

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
			<div className='text-center mt-3'>
				<p className='text-white'>
					Don't have an account?&nbsp;&nbsp;
					<b><Link to='/signup' className='text-white'>
						Sign up
					</Link> </b>
				</p>
			</div>
		</div>
	);
}

export default Login;
