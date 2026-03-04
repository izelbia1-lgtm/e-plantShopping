import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {

  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) =>
        total + parseFloat(item.cost.replace("$","")) * item.quantity, 0);
};

  const handleIncrement = (item) => {
    dispatch(updateQuantity({
      name: item.name,
      quantity: item.quantity + 1
    }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({
        name: item.name,
        quantity: item.quantity - 1
      }));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const handleContinueShopping = () => {
    onContinueShopping();
  };

  return (
    <div className="cart-container">

      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

      {cart.map((item, index) => (
        <div key={index} className="cart-item">

          <img src={item.image} alt={item.name} />

          <div>
            <h3>{item.name}</h3>
            <p>${item.cost}</p>
            <p>Quantity: {item.quantity}</p>

            <button onClick={() => handleIncrement(item)}>+</button>
            <button onClick={() => handleDecrement(item)}>-</button>
            <button onClick={() => handleRemove(item.name)}>Remove</button>

          </div>

        </div>
      ))}

      <button onClick={handleContinueShopping}>
        Continue Shopping
      </button>

      <button>
        Checkout
      </button>

    </div>
  );
};

export default CartItem;
