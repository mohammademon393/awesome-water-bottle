import React from 'react';
import './Bottle.css';

const Bottle = ({ bottle, handleAddToCart }) => {
  return (
    <div>
      <div className="card">
        <img className="photo" src={bottle.image} alt="" />
        <h2>Name: {bottle.name}</h2>
        <p>Brand: {bottle.brand}</p>
        <h5>Price:{bottle.price}</h5>
        <p>Material: {bottle.material}</p>
        <p>Capacity_ml: {bottle.capacity_ml}</p>
        <button onClick={()=> handleAddToCart(bottle)}>Buy Now</button>
      </div>
    </div>
  );
};

export default Bottle;