import React,{useState,useContext,useEffect} from "react";
import { Link} from "react-router-dom";
import Home from "../pages/mainpages/home";
import Products from "../pages/mainpages/products";
import Aboutus from "../pages/mainpages/aboutus";
import Login from "../pages/mainpages/login";
import Register from "../pages/mainpages/register"
import CartImage from "../icons/shopping-cart-empty-side-view.png"
import Cart from "../pages/cart/cart"
import Close from "../icons/circle_icon.png"
import '../css/navbar.css'
import {GlobalState} from "../GlobalState"
import axios from "axios";
function Navbar(){
        const state = useContext(GlobalState);
        console.log("the value of state nav",state);
        const [isLogged,setIslogged] = state.userAPI.isLogged;
        const [isAdmin,setIsAdmin] = state.userAPI.isAdmin  
        const [cart] = state.userAPI.cart
        
        const logoutUser = async () =>{
          await axios.get("http://localhost:4000/logout")
          localStorage.clear()
          setIsAdmin(false)
          setIslogged(false)
      
        }
        const adminRouter = () =>{ 
          return (
            <>
            <ul className="navbar-nav ml-auto">
                <li className = "nav-item" style={{display:"flex",justifyContent:"space-between"}}><Link className = "nav-link" to = "/create_product">Create Product</Link></li>
                <li className = "nav-item" style={{display:"flex",justifyContent:"space-between"}}><Link className = "nav-link" to = "/category">Categories</Link></li>
            </ul>
            </>
          )
        }
        const loggedRouter = () =>{
          return (
            <>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item" style={{display:"flex",justifyContent:"space-between"}}><Link className = "nav-link" to = "/history">History</Link></li>
                <li className="nav-item" style={{display:"flex",justifyContent:"space-between"}}><Link className = "nav-link" to = "/" onClick = {logoutUser}>Logout</Link></li>
            </ul>
            </>
          )
        }
     
        return(
        <>
            <div id="preloader">
                <div className="jumper">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>  
           
            <header className="">
              <nav className="navbar navbar-expand-lg">
                <div className="container">
                 <Link className="navbar-brand" to="/">{isAdmin ? <h2><em>Admin</em></h2>: <h2>Your <em>Shop  </em></h2>}</Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                      <li className ="nav-item active">
                        <Link className = "nav-link" to="/" component = {Home}>Home
                          <span className = "sr-only">(current)</span>
                        </Link>
                      </li> 
                      <li className = "nav-item">
                        <Link className = "nav-link" to = "/products" component = {Products }>{isAdmin ? "Admin products": "Our Products"}
                          
                        </Link>
                      </li>
                      <li className = "nav-item">
                        <Link className = "nav-link" to = "/aboutus" component = {Aboutus}>
                          About Us
                        </Link>
                      </li>
                      {isAdmin && adminRouter()}
                      {
                        isLogged ? loggedRouter() :       
                        <ul className="navbar-nav ml-auto">
                            <li className = "nav-item">
                            <Link className = "nav-link" to = "/register" component = {Register}>
                              Signup
                            </Link>
                          </li>
                          <li className = "nav-item">
                            <Link className = "nav-link" to = "/login" component = {Login}>
                              Login
                            </Link>
                          </li>
                      </ul>
                      }
               
                      <li>
    
                        <img src={Close} alt = "" className="close" width = "30" padding = "10px" background-color = "white" />

                      </li>
                        {
                          isAdmin ? '':
                          <li className="cart-icon" >
                          <span>{cart.length}</span>
                         <Link className= "nav-link" to =  "/cart"  component = {Cart}>
                            <img src = {CartImage} alt = "" width = "30px" padding = "10px" backgroundColor = "white" />
                         </Link>
                     </li>
                        }
                     
                    </ul>
                  </div>
                </div>
              </nav>
            </header>

            </>
        );
}

export default Navbar;