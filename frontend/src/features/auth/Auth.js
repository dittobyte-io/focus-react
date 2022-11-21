import cardLogo from "features/ui/svgs/logo-hz-white.svg";
import React, { useState } from 'react';
// import {authSlice} from "./authSlice";
import {setCredentials, logOut} from "./authSlice";
import { useDispatch,useSelector} from "react-redux";
import { useLoginUserMutation } from "../../app/api/authApi";
import { Link, Navigate } from 'react-router-dom';


function Auth() {
    const [email, setemail]=useState("");
    const [password, setpassword]=useState("");
	const [passwordShown, setpasswordShown] = useState(false);

    const dispatch=useDispatch();
    const[loginUser, {data,isSuccess,isError,message}]= useLoginUserMutation()
    console.log(data,"this is what we are passing");
	let c='bi';
    const registerHandle = () =>{
        console.log(email,password);
        loginUser({email,password});
    }
    
    if(isSuccess )
    {
        dispatch(setCredentials({token:data.token,data:data.data}))
        localStorage.setItem("token",data.token);
		return <Navigate to="/" /> 
		// direct to the consultant dashboard
    }
   

    

    return (
        <>
            <div id='login-box' className='card border-0'>
				
                <div className='card-header bg-tertiary d-flex align-items-center justify-content-center'>
                    <img src={cardLogo} alt='Focus Logo' className='card-logo' />
                </div>
                <div className='card-body p-4'>
                    <div className='text-center w-75 m-auto'>
                        <h1 className='h5 card-title fw-bold'>Sign In</h1>
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
                                onChange={(e)=>setemail(e.target.value)}
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
                                onChange={(e)=>setpassword(e.target.value)}
                                />
                                 <div
                                    className='input-group-text input-group-password'
                                    data-password='false'
                                > 
                                 <span  onClick={() => setpasswordShown(!passwordShown)} className={passwordShown ? c=c+' bi-eye' : c+' bi-eye-slash'} ></span> 
									
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
                                className='form-check-label text-muted'
                                htmlFor='rememberMe'
                            >
                                &nbsp;
                                <small>Remember Me</small>
                            </label>
                        </div>
                        <div className='mb-3 mb-0 text-center'>
                    
                            <button type='button' onClick={registerHandle} className='btn btn-primary text-white'>
                                Log In
                            </button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Auth;
