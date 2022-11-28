import cardLogo from "features/ui/svgs/logo-hz-white.svg";
import React, { useState } from 'react';
import {setCredentials, logOut} from "./authSlice";
import { useDispatch} from "react-redux";
import { useLoginUserMutation } from "../../app/api/authApi";
import {  useNavigate } from 'react-router-dom';
import { useEffect } from "react";



function Auth() 
{
    const [email, setemail]=useState("");
    const [password, setpassword]=useState("");
    const [passwordShown, setpasswordShown] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();



    const dispatch=useDispatch();
    const[loginUser, {data: loginData,isSuccess:isLoginSuccess,isError: isLoginError,error:loginError}]= useLoginUserMutation()
	let c='bi';
    const loginHandle = async () =>{
		loginUser({email,password});
		setErrorMessage("");
	}

 	useEffect(() => {
	if(isLoginSuccess )
    {
		dispatch(setCredentials({token:loginData.token,data:loginData.data}))
        localStorage.setItem("token",loginData.token);
        localStorage.setItem('firstName', loginData.data.first_name);
        localStorage.setItem('lastName', loginData.data.last_name);
		navigate("/");  // direct to the consultant dashboard
       
    }
	
	if(isLoginError){
		setErrorMessage(loginError.data.message);
		dispatch(setCredentials({message:loginError.data.message}))

    }
    },[isLoginSuccess, isLoginError, loginData, dispatch, loginError]);

  
    return (
		    <>
				<div id="login-box" className="row justify-content-center align-items-center">
					<div className="col-xxl-4 col-xl-5 col-lg-6 col-md-8">
					<div className="card no-border">
						<div className="bg-focus-blue card-header"
						style={{backgroundColor: "#1f2b5c"}}>
						<img
							src={cardLogo}
							className="card-img-top login-cap"
							alt="focus logo"
						/>
						</div>
						<div className="card-body p-4">
						<div className="text-center w-75 m-auto">
							<h5 className="card-title fw-bold">Sign In</h5>
							<p className="text-muted mb-4">
							Enter your email address and password to log in to your account.
							</p>
						</div>
						<form>
							<div className="mb-4">
							<label htmlFor="username" className="form-label">
								Username
							</label>
							<input
								placeholder="Enter your email"
								name="username"
								autoComplete="username"
								type="text"
								id="username"
								className="form-control"
								value={email}
								onChange={(e) => setemail(e.target.value)}
							/>
							</div>
							<div className="mb-3">
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<a className="text-muted float-end" href="forgot-password.html">
								<small>Forgot your password?</small>
							</a>
							<div className="mb-0 input-group">
								<input
								placeholder="Enter your password"
								name="password"
								autoComplete="password"
								type={passwordShown ? "text" : "password"}
								id="password"
								className="form-control"
								value={password}
								onChange={(e) => setpassword(e.target.value)}
								/>
								<div
								className="input-group-text input-group-password"
								data-password="false"
								>
								<span
									onClick={() => setpasswordShown(!passwordShown)}
									className={
									passwordShown ? (c = c + " bi-eye") : c + " bi-eye-slash"
									}
								></span>
								</div>
							</div>
							</div>
							<div className="mb-4">
							<input
								className="form-check-input"
								type="checkbox"
								defaultValue=""
								id="rememberMe"
							/>
							<label
								className="form-check-label text-muted"
								htmlFor="rememberMe"
							>
								<small>Remember Me</small>
							</label>
							</div>
							<div className="mb-3 mb-0 text-center">
							<span style={{ color: "red", fontSize: "15px" }}>
                            {errorMessage}
                          </span>
                          <br/>
							<button
								type="button"
								onClick={loginHandle}
								className="btn btn-primary text-white"
							>
								Log In
							</button>
							</div>
						</form>
						</div>
					</div>
					</div>
				</div>
		    </>
            );
}

export default Auth;
