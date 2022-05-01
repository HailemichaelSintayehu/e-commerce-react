import React,{useContext} from "react";
import { Link } from "react-router-dom";
import {GlobalState} from "../GlobalState";
//  

function Btnrender({ product }) {
  const state = useContext(GlobalState)
  
  const [isAdmin] = state.userAPI.isAdmin
  const addCart = state.userAPI.addCart

  console.log("the value of addCart in Btnrenderjs",addCart)
  return (
    <div className="row_btn">
      {
        isAdmin ? 
        <>
            <Link id = "btn_buy" to = "#!">
                Delete
            </Link>
            <Link id="btn_view" to = {`/edit_product/${product._id}`}>
                 Edit
            </Link>
        </>
        :<>
          <Link id = "btn_buy" to = "#!" onClick = {() => addCart(product)}>
            Buy
          </Link>
          <Link id="btn_view" to = {`/detail/${product._id}`}>
            View
          </Link>
        
        </>
      
}
    </div>
  );
}

export default Btnrender;
