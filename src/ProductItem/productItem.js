import React from "react";
import { Link } from "react-router-dom";
import "../css/productItem.css";
function ProductItem({ product }) {
  return (
    // <div className='"product-card'>
    //     <img src = {product.images.url} alt = "" />
    //     <div className = "product_box">
    //         <h2 title = {product.title}> {product.title}</h2>
    //         <span>${product.price}</span>
    //         <p>{product.description}</p>
    //     </div>
    //     <div className='row_btn'>
    //       <Link id='btn_buy' to="#!">
    //         Buy
    //       </Link>
    //       <Link id='btn_view' to={`detail/${product._id}`}>
    //           View
    //       </Link>

    //      </div>
    // </div>
    <>
      {/*  */}

    
                  <div className="col-lg-4 col-md-4 all des">
                    <div className="product-item">
                      <a href="#">
                        <img src={product.images.url} alt="" />
                      </a>
                      <div className="down-content">
                        <h4 title={product.title}> {product.title}</h4>

                        <h6>${product.price}</h6>
                        <p>{product.description}</p>
                        <ul className="stars">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                        <span>Reviews (12)</span>
                      </div>
                      <div className="row_btn">
                        <Link id="btn_buy" to="#!">
                          Buy
                        </Link>
                        <Link id="btn_view" to={`/detail/${product._id}`}>
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
        
    </>
  );
}

export default ProductItem;
