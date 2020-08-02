import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
	const [{ basket }, dispatch] = useStateValue();
	useEffect(() => {
		const unSubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
		return () => {
			unSubscribe();
		};
	}, []);
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
