import React from "react";
import { Link} from "react-router-dom";
import Home from "../pages/home";
import Products from "../pages/products";
import Aboutus from "../pages/aboutus";
import Login from "../pages/login";
import Register from "../pages/register"

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
                  <Link className="navbar-brand" to="/" component = {Home}><h2>Your <em>Shop  </em></h2></Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/" component = {Home}>Home
                          <span className="sr-only">(current)</span>
                        </Link>
                      </li> 
                      <li className="nav-item">
                        <Link className="nav-link" to="/products" component={Products }>Our Products</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to = "/aboutus" component = {Aboutus}>About Us</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to= "/register" component = {Register}>Signup</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to= "/login" component = {Login}>Login</Link>
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