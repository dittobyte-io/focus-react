import cardLogo from "features/ui/svgs/logo-hz-white.svg";
import { useState } from "react";
import { setCredentials } from "./authSlice";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../../app/api/authApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordShown, setPasswordShown] = useState(false);
	const navigate = useNavigate();

	const dispatch = useDispatch();
	
	const [
		loginUser,
		{
			data: loginData,
			isSuccess: isLoginSuccess,
			isError: isLoginError,
			error: loginError,
		},
	] = useLoginUserMutation();
	const handleLogin = async (e) => {
		e.preventDefault();
		loginUser({ email, password });	
	};
	

	useEffect(() => {
		if (isLoginSuccess) {
			dispatch(
				setCredentials({ token: loginData.token, data: loginData.data })
			);
			navigate("/"); // direct to the consultant dashboard
		}

		if (isLoginError) {
			dispatch(setCredentials({ message: loginError.data.message }));	
		}
	}, [isLoginSuccess, isLoginError, loginData, loginError]);
	

	return (
		<>
			<div id='login-box' className='card border-0'>
				<div className='card-header bg-tertiary d-flex align-items-center justify-content-center'>
					<img src={cardLogo} alt='Focus Logo' className='card-logo' />
				</div>
				<div className='card-body p-4'>
					<div className='text-center w-75 m-auto'>
						<h1 className='h5 card-title'>Sign In</h1>
						<p className='text-muted mb-4'>
							Enter your email address and password to login to your account.
						</p>
					</div>
					<form>
						<div className='mb-4'>
							<label htmlFor='username' className='form-label'>
								Username
							</label>
							<input
								placeholder='Enter your email'
								name='username'
								autoComplete='username'
								type='text'
								id='username'
								className='form-control'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='password' className='form-label'>
								Password
							</label>
							<a className='text-muted float-end' href='forgot-password.html'>
								<small>Forgot your password?</small>
							</a>
							<div className='mb-0 input-group'>
								<input
									placeholder='Enter your password'
									name='password'
									autoComplete='password'
									type={passwordShown ? "text" : "password"}
									id='password'
									className='form-control'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<div
									className='input-group-text input-group-password'
									data-password='false'
								>
									<span
										onClick={() => setPasswordShown(!passwordShown)}
										className={passwordShown ? "bi bi-eye" : "bi bi-eye-slash"}
									></span>
								</div>
							</div>
						</div>
						<div className='mb-4'>
							<input
								className='form-check-input'
								type='checkbox'
								value=''
								id='rememberMe'
							/>
							<label
								className='form-check-label text-muted ps-1'
								htmlFor='rememberMe'
							>
								<small>Remember Me</small>
							</label>
						</div>
						<div className='mb-3 mb-0 text-center'>
							<button
								type='submit'
								className='btn btn-primary text-white'
								onClick={handleLogin}
								
							>
								Log In
							</button>
							
						</div>
					</form>		
				</div>
			</div>
			
			{
				isLoginError === true ? (
					<div className="position-fixed pt-5 top-0 start-50 translate-middle">
					<div
					className="alert alert-warning alert-dismissible fade show "
					role="alert"
					id="message"
					>
					Please enter valid credentials.
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"
					></button>
					</div>
					</div>
				) : null
			}
			
		</>
	);

}

export default Auth;
