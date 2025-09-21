import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addItem, getCart } from "../../utilitis/LocalStorage";
import Cart from "../Cart/Cart";
// import LocalStorage from '../../utilitis/LocalStorage';

const Bottles = ({ bottlePromies }) => {
  const bottles = use(bottlePromies);
  const [cart, setCart] = useState([]);
  // console.log(bottles);

  useEffect(() => {
    const storeCartIdes = getCart();
    //   console.log(storeCartIdes, bottles);

    const storeCart = [];

    for (const id of storeCartIdes) {
      // console.log(id);
      const cartBottles = bottles.find((bottle) => bottle.id === id);
      if (cartBottles) {
        storeCart.push(cartBottles);
      }
    }
    setCart(storeCart);
    // console.log(storeCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newBottle = [...cart, bottle];
    setCart(newBottle);

    // save to cart id in local sstorage
    addItem(bottle.id);
  };


  const handleRemove = (id)=>{
    console.log("remove the cart btn clicked",id);
    const removes = cart.filter(bottle => bottle.id !== id);
    setCart(removes);
    
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

      <div>
        <Cart cart={cart} handleRemove={handleRemove}></Cart>
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
