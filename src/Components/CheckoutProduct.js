import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';
const CheckoutProduct = ({ id, title, image, price, rating }) => {
	const [{ basket }, dispatch] = useStateValue();

	const removeItem = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id,
		});
	};
	return (
		<div className="checkoutProduct">
			<img src={image} className="checkoutProduct__image" alt="" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title"> {title}</p>
				<p className="checkProduct__price">
					<small>Rs</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_) => (
							<StarRateIcon className="star" />
						))}
				</div>
				<button onClick={removeItem}>Remove Item</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
