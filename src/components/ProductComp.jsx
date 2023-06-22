import PropTypes from "prop-types";
import "../../css/Main.min.css";
import DiscountComp from './DiscountComp';
import React, { useState } from 'react';
function ProductComp(props) {
  const [hover , setHover] = useState(false);
  
  function OnMouseHover() { 
    setHover(true);
  }
  function OnMouseLeave() {
    setHover(false);
  }
  const {
    productImage,
    productName,
    productCategory,
    productDescription,
    productPrice,
    productDiscount,
  } = props;
  return (
    <section className="product--section">
      <div className="product-wrapper">
        <div className="product-image-cont">
          <img className="product-img" src={productImage} alt="" />
        </div>
        <div className="product-context-cont">
          <div className="content">
            <h3>{productCategory}</h3>
            <h1>{productName}</h1>
            <p>{productDescription}</p>
          </div>
          <div className="prices"
           onMouseEnter={OnMouseHover}
           onMouseLeave={OnMouseLeave}
          >
          {hover ?  <DiscountComp/> : '' }
            <h2>
              ${productPrice}
            </h2>
            <del>
            <span>${productDiscount}</span>
            </del>
          </div>
          <div className="button-cont">
            <button> 
            <i className="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductComp;
ProductComp.propTypes = {
  productImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productCategory: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productDiscount: PropTypes.number.isRequired,
};
