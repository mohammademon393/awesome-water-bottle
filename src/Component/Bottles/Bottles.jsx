import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';

const Bottles = ({ bottlePromies }) => {
    const bottles = use(bottlePromies);
    const [cart, setCart] = useState([]);
    // console.log(bottles);
    
    const handleAddToCart =(bottle)=>{
        const newBottle = [...cart, bottle];
        setCart(newBottle);
        
    }


  return (
    <div>
      <h2>Bottles: {bottles.length}</h2>

      <div className="list">
        <h3>Add to cart: {cart.length}</h3>
        <ol>
          {cart.map((c) => (
            <li key={c.id}>{c.name}</li>
          ))}
        </ol>
      </div>

      <div className="card-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;