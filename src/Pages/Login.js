import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	const login = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((e) => alert(e.message));
	};
	const register = (e) => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((e) => alert(e.message));
	};
	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__image"
					src="https://pngimg.com/uploads/amazon/amazon_PNG13.png"
					alt=""
				/>
			</Link>
			<div className="login__container">
				<h1>Sign In</h1>
				<form>
					<h5>Email</h5>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						onClick={login}
						type="submit"
						className="login__signIn"
					>
						Sign In
					</button>
				</form>
				<p>
					Choosing "Keep me signed in" reduces the number of times
					you're asked to Sign-In on this device. To keep your account
					secure, use this option only on your personal devices.
				</p>
				<button
					onClick={register}
					type="submit"
					className="login__signUp"
				>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
};

export default Login;
