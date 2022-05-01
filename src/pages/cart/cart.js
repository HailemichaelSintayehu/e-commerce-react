import React, { useState, useContext } from "react";

import "../../css/cart.css";

import { GlobalState } from "../../GlobalState";

import { Link } from "react-router-dom";
function Cart() {
  const state = useContext(GlobalState);

  const [cart] = state.userAPI.cart;

  const [total,setTotal] = useState(0)

  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((counter) => counter + 1);
  };
  const decrease = () => {
    setCounter((counter) => counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };
 

  console.log("the value of cart in cart js:", cart);

  if (cart.length === 0) {
    return (
      <h1  style={{ textAlign: "center", fontSize: "5rem",  paddingTop: "100px",
      paddingRight: "300px",
      paddingBottom: "100px",
      paddingLeft: "300px",
      position:"relative"}}>
        Cart empty
      </h1>
    );
  }
  return (
    <>
      {cart.map((cartProducts) => (
        <div className = "cart">
          <img
            src = {cartProducts.images.url}
            alt = ""
            style = {{ width : "300", height : "300"}}
            
          />

          <div className = "box_detail">
            <h2>{cartProducts.title}</h2>
            <span>Price in Dollar:  {cartProducts.price * cartProducts.quantity}$ </span>
            <p>{cartProducts.description}</p>
            <p>{cartProducts.content}</p>
            <div className = "amount">
              <button onClick={decrease}>-</button>
              <span>{cartProducts.quantity}</span>
              <button onClick={increase}>+</button>
              <br />
              <button onClick={reset}>reset</button>
            </div>
            <div className = "delete">x</div>
          </div>
        </div>
      ))}
      <div className = "total">
        <h3>Total: $0{total}</h3>
        <Link to = "#!">Payment</Link>
      </div>
    </>
  );
}

export default Cart;
