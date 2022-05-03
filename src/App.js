import React,{useState,useContext} from "react";
import Home from "./pages/mainpages/home";
import { GlobalState } from "./GlobalState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/mainpages/products";
import ProductDetails from "./pages/productDetails/productDetails";

import Aboutus from "./pages/mainpages/aboutus";
import Login from "./pages/mainpages/login";
import Register from "./pages/mainpages/register";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Cart from "./pages/cart/cart"
import NotFound from "./pages/utilities/NotFound/notfound"
import History from "./pages/mainpages/history";
// import ActivationEmail from "./auth/ActivationEmail";
import { DataProvider } from "./GlobalState";
function App() {

   const state = useContext(GlobalState);
  //  const [isLogged] = state.userAPI.isLogged;
  return (
    <>
      <BrowserRouter>
        <DataProvider>
        <Navbar />
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/products" element = {<Products />} /> 
            <Route path = "/detail/:id" element = {<ProductDetails />} />
            <Route path = "/aboutus" element = {<Aboutus />} /> 
            <Route path = "/login" element = { <Login />} />
            <Route path = "history" element = {<History/>}/>
            <Route path = "/register" element = {<Register />} />
            <Route path = "/cart" element = {<Cart/>} />

            <Route path="*" element = {<NotFound/>} />
            {/* <Route path="/activate/:activation_token" element={<ActivationEmail/>}/> */}
          </Routes>
        </DataProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
