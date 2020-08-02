import React from 'react';
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import CheckoutProduct from '../Components/CheckoutProduct';
import SubTotal from '../Components/SubTotal';
const Checkout = () => {
	const [{ basket }] = useStateValue();
	return (
		<div className="checkout">
			<div className="chekout__left">
				<img
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
					className="checkout__ad"
				/>
				{basket.length === 0 ? (
					<div>
						<h2 className="checkout__title">
							Your basket is empty
						</h2>
						<p className="checkout__title">
							You have no items in your cart. To buy one press
							'Add to Cart' button next to the item
						</p>
					</div>
				) : (
					<div>
						<h2 className="checkout__title">
							Your Shopping Cart :
						</h2>
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				)}
			</div>
			{basket.length > 0 && (
				<div className="checkout__right">
					<SubTotal />
				</div>
			)}
		</div>
	);
};

export default Checkout;
