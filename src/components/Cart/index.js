import React from "react";
import Product from "../Product";
import "./style.css";

function index({
  products,
  cart,
  toggleProduct,
  updateQuantity,
}) {
  return (
    <div className="cart">
      <h2>My Cart</h2>
      <div>
        {products.map((product) => (
          <Product
            key={`${product.id}-product-card`}
            product={product}
            cartProduct={cart[product.id]}
            toggleProduct={toggleProduct}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>
    </div>
  );
}

index.displayName = "Cart";

export default index;
