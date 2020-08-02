import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
const Header = () => {
	const [{ basket, user }] = useStateValue();
	const logout = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<nav className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="amazon"
				/>
			</Link>
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link to={!user && '/login'} className="header__link">
					<div onClick={logout} className="header__option">
						<span className="header__optionLineOne">
							Hello {user.email}
						</span>
						<span className="header__optionLineTwo">
							{user ? 'Sign Out' : 'Sign In'}
						</span>
					</div>
				</Link>

				<Link to="/" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Orders</span>
						<span className="header__optionLineTwo">&Return</span>
					</div>
				</Link>

				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</Link>
				<Link to="/checkout" className="header__link">
					<div className="header__optionBasket">
						<ShoppingCartIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
