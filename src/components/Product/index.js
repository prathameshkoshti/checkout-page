import React from "react";
import "./style.css";

function index({ product, cartProduct, toggleProduct, updateQuantity }) {
  const setQuantity = (event) => {
    const { value } = event.target;
    updateQuantity(product.id, parseInt(value));
  };

  return (
    <div className="product">
      <div className="product-checkbox">
        <label htmlFor={`product_${product.id}`}>
          <input
            id={`product_${product.id}`}
            type="checkbox"
            checked={cartProduct && cartProduct.isChecked ? true : false}
            onChange={toggleProduct}
            data-product-id={product.id}
          />
          <span className="custom-checkbox"></span>
        </label>
      </div>
      <div className="product-image">
        <img
          src="https://picsum.photos/200"
          width="100"
          height="100"
          alt="Product"
        />
      </div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-price">
          ${" "}
          {(
            (cartProduct && (cartProduct.quantity || 1)) * product.price
          ).toFixed(2)}
        </div>
        <div className="product-quantity">
          <label htmlFor={`quantity_for_${product.id}`}>Quantity:</label>
          <input
            type="number"
            className="quantity-input"
            id={`quantity_for_${product.id}`}
            value={(cartProduct && cartProduct.quantity) || 1}
            onChange={setQuantity}
          />
        </div>
      </div>
    </div>
  );
}

index.displayName = "Product";

export default index;
