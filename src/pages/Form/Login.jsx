import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { authContext } from '../../contexts/AuthProvider';
import verifyUserToken from '../../utilities/utilities';

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/'
	// let from = location.state?.from?.pathname || "/";
	const { emailLogin, user, googleSignIn } = useContext(authContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		emailLogin(email, password)
			.then(result => {
				const profile = result.user;
				verifyUserToken(profile)
				form.reset();
				navigate(from, { replace: true });
			})
		.catch(err=>console.error(err.message))
	}
	// google signIn
	const handleGoogleSignIn = () => {
		googleSignIn()
			.then(result => {
				const profile = result.user;
				verifyUserToken(profile);
				// navigate(from, { replace: true });
			})
		.catch(err=>console.error(err.me))
	}
	useEffect(() => {
		if (user) {
			navigate(from, { replace: true });
		}
	},[user])
    return (
        <div className='grid grid-cols-12 my-10'>
			<div className="col-span-6">
				<img className='lg:ml-40 lg:mt-32 lg:h-96' src={loginImg} alt="" />
			</div>
            <div className="col-span-6">
            <div className="w-full max-w-md p-8 space-y-3 border-2 bg-white">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label htmlFor="email" className="block dark:text-gray-900">Email</label>
			<input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md border-2 bg-white focus:dark:border-purple-400" autoComplete="off" style={{backgroundImage: `url(&quot;chrome-extension://igkpcodhieompeloncfnbekccinhapdb/images/vault-input-disabled.svg&quot;) !important`, backgroundRepeat: "no-repeat !important", backgroundPosition: "99% center !important", backgroundSize: "14px !important", cursor: "text"}} required />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block dark:text-gray-900">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 border-2 rounded-md dark:border-gray-200 bg-white focus:dark:border-purple-400" autoComplete="off" style={{backgroundImage: `url(&quot;chrome-extension://igkpcodhieompeloncfnbekccinhapdb/images/vault-input-disabled.svg&quot;) !important`, backgroundRepeat: "no-repeat !important", backgroundPosition: "99% center !important", backgroundSize: "14px !important"}} required/>
			<div className="flex justify-end text-xs dark:text-gray-400">
				<Link rel="noopener noreferrer" to="/">Forgot Password?</Link>
			</div>
		</div>
		<button className="block w-full p-3 text-center rounded-sm text-white dark:bg-[#FF3811]">Log In</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
	</div>
	<p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
		<Link to='/register' rel="noopener noreferrer" className="dark:text-orange-400 font-bold">Sign up</Link>
	</p>
</div>
            </div>
        </div>
    );
};

export default Login;