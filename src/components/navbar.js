import React from "react";
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
function Navbar(){
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
                  <Link className="navbar-brand" to="/" component = {Home}>
                    <h2>Your <em>Shop  </em></h2>
                  </Link>
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
                        <Link className = "nav-link" to = "/products" component = {Products }>
                          Our Products
                        </Link>
                      </li>
                      <li className = "nav-item">
                        <Link className = "nav-link" to = "/aboutus" component = {Aboutus}>
                          About Us
                        </Link>
                      </li>
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
                      <li>
    
                        <img src={Close} alt = "" className="close" width = "30" padding = "10px" background-color = "white" />

                      </li>

                      <li className="cart-icon" >
                           <span>0</span>
                          <Link className= "nav-link" to =  "/cart"  component = {Cart}>
                             <img src = {CartImage} alt = "" width = "30px" padding = "10px" backgroundColor = "white" />
                          </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>

            </>
        );
}

export default Navbar;