import React, { useState,useContext,useEffect} from "react";

import "../../css/cart.css";

import { GlobalState } from "../../GlobalState";

import { Link } from "react-router-dom";

import axios from "axios";
function Cart() {
  const state = useContext(GlobalState);

  const token = state.token

  const [cart,setCart] = state.userAPI.cart;

  const [total,setTotal] = useState(0)

  useEffect(() =>{
    const getTotal = () =>{
      const total = cart.reduce((prev,item)=>{
        return prev + (item.price * item.quantity)
      },0)
      setTotal(total);
    }
    getTotal();
  },[cart])
  const addToCart = async() =>{
    await axios.patch("http://localhost:4000/addcart",{cart},{
      headers : {
        Authorization : token
      }
    })
  }

  const increase = (id) => {
    cart.forEach(item => {
      if(item._id ===id){
        item.quantity += 1
      }
    });
    setCart([...cart])
    addToCart()
  };

  const decrease = (id) => {
    cart.forEach(item => {
      if(item._id ===id){
        item.quantity === 1 ? item.quantity =1 : item.quantity -= 1
      }
    });
    setCart([...cart])
    addToCart()
  };

  const reset = (id) => {
    cart.forEach(item => {
      if(item._id ===id){
        item.quantity = 1
      }
    });
    setCart([...cart])
    addToCart()
  };

const removeProduct = (id) => {
  if(window.confirm("Do you want to delete the product from the cart?")){
    cart.forEach((item,index) =>{
      if(item._id ===id){
        cart.splice(index,1)
      }
    })
    setCart([...cart])
    addToCart()
  }
}
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
        <div className = "cart" key = {cartProducts._id}>
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
              <button onClick = {() => decrease(cartProducts._id)}>-</button>
              <span>{cartProducts.quantity}</span>
              <button onClick = {() => increase(cartProducts._id)}>+</button>
              <br />
              <button onClick = {() =>reset(cartProducts._id)} >reset</button>
            </div>
            <div className = "delete" onClick = {() =>removeProduct(cartProducts._id)}>x</div>
          </div>
        </div>
      ))}
      <div className = "total">
        <h3>Total: ${total}</h3>
        <Link to = "#!">Payment</Link>
      </div>
    </>
  );
}

export default Cart;
