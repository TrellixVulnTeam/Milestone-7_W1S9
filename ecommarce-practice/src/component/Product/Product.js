import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { img, name, url, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="img" />
      </div>
      <div>
        <a className="product-name" href={url}>
          {name}
        </a>
        <br />
        <p className="seller">By: {seller}</p>
        <p className="price">Price: ${price}</p>
        <br />
        <p>Only {stock} left in stoke - Order soon</p>
        <button
          className="button"
          onClick={() => {
            props.handleAddProduct(props.product);
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          <span style={{ color: "white" }}> Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
