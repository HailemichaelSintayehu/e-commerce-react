import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { GlobalState } from "../../GlobalState";

import "../../css/productDetails.css";

import ProductItem from "../../ProductItem/productItem";


function ProductDetails() {
  const params = useParams();
  const state = useContext(GlobalState);
  console.log(state);

  const [products] = state.ProductsApi.products;

  const [detailProduct, setDetailProuduct] = useState([]);

  const addCart = state.userAPI.addCart;
  
  useEffect(() => {
    console.log("re render");
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProuduct(product);
      });
    }
  }, [params.id, products]);

  console.log("view details:", detailProduct);

  if (detailProduct.length === 0) return null;
  return (
    <>
      <div className="product_detail">
        <img src={detailProduct.images.url} alt="" />

        <div className="box_detail">
          <div className="row">

            <h2>{detailProduct.title}</h2>
            <h6>#id: {detailProduct.product_id}</h6>

          </div>
          <span>${detailProduct.price}</span>
          <p>{detailProduct.description}</p>
          <p>{detailProduct.content}</p>
          <p style={{ color: "blue" }}>Sold: {detailProduct.sold}</p>

          <Link to="/cart" 
          className="cart"
          onClick = {() => addCart(detailProduct)}>
            Add to Cart
          </Link>
        </div>
      </div>
      <div className="products">
        <h2>Related Products</h2>
        {products.map((product) => {
          return product.category === detailProduct.category ? (
            <ProductItem key={product._id} product={product} />
          ) : null;
        })}
      </div>
    </>
  );
}

export default ProductDetails;
