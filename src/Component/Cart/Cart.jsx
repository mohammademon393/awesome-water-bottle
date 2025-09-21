import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemove }) => {
  console.log(cart);

  return (
    <div className="cart-container">
      {cart.map((bottle) => (
        <div key={bottle.id}>
          <img src={bottle.image} alt="" />
          <button onClick={()=> {handleRemove(bottle.id)}}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;