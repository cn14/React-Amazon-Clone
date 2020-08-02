import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
const SubTotal = () => {
	const [{ basket }, dispatch] = useStateValue();
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div className="total__value">
						<p className="sub_total">
							Subtotal({basket.length} items):
						</p>
						<strong className="value">{`${value}`}</strong>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeperator={true}
				prefix={'Rs. '}
			/>
			<button>Proceed to Checkout </button>
		</div>
	);
};

export default SubTotal;
