import cardLogo from "features/ui/svgs/logo-hz-white.svg";

function Auth() {
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
				</div>
			</div>
		</>
	);
}

export default Auth;
