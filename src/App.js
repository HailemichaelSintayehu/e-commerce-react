import React from "react";
import Home from "./pages/home";
// import ProductList from "./components/product_list";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navigation from "./contents /Navbar/navbar";
// import Details from "./components/details";
// import Sidebar from "./contents /sidebar";
// import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";

import { BrowserRouter , Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import Aboutus from "./pages/aboutus";
import Login from "./pages/login";
import Register from "./pages/register"
import Navbar from "./components/navbar"
import Footer from "./components/footer";   
import ActivationEmail from "./auth/ActivationEmail";

function App() {
  return (
      <>
        
      <BrowserRouter>
      <Navbar/>
       
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path= "/products" element = { <Products />}/>
        <Route path="/aboutus" element = { <Aboutus />}/>
        <Route path="/login" element = { <Login />}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/activate/:activation_token" element={<ActivationEmail/>}/>
       
     </Routes>
        <Footer/>
      </BrowserRouter>
      </>
  
  );
}

export default App;
