import React from 'react';

const Bottle = ({ bottle }) => {
    
  return (
    <div>
      <img src={bottle.image} alt="" />
      <h2>Name: {bottle.name}</h2>
      <p>Brand: {bottle.brand}</p>
      <h6>Material: {bottle.material}</h6>
      <p>Capacity_ml: {bottle.capacity_ml}</p>
    </div>
  );
};

export default Bottle;