
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, updateQuantity } from '../Store/CartSlice/CartSlice';
import {  Link, useNavigate } from 'react-router-dom';
import '../styles/Cart.css';
const Cart = () => {
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart.cartItems) || [];
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    alert("Item removed successfully");
  };

  const incrementQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const decrementQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };

  const totalQuantity = cartProducts.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartProducts.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalPrice = totalAmount.toFixed(2);

  return (
    <div>
      {totalQuantity ? (
        <div>
          {cartProducts.map((item) => (
            <div key={item.id} className='cc'>
              <img src={item.img} className='cc1' alt={item.title} />
              <p className='cc2'>{item.title}</p>
              <button className='cc6' type="button" onClick={() => decrementQuantity(item.id, item.quantity)}>-</button>
              <p className='cc5'>{item.quantity}</p>
              <button  className='cc6' type="button" onClick={() => incrementQuantity(item.id, item.quantity)}>+</button>
              <button type="button" onClick={() => deleteCart(item)}>Remove</button>
            </div>
          ))}
          <div className='t'>
            <h6>ITEMS - {totalQuantity}</h6>
            <Link to='/DeliveryAddressPage'><button className='t1'>Checkout</button></Link>
          </div>
        </div>
      ) : (
        <div className='o'>
          <button onClick={() => navigate("/FoodMenu")}>Start Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
