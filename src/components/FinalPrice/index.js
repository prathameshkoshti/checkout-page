import React from "react";
import Coupons from "../Coupons";
import Button from "../Button";
import "./style.css";

function index({
  coupons,
  totalPrice,
  finalPrice,
  selectedCoupon,
  selectCoupon,
  removeCoupon,
}) {
  return (
    <div className="invoice">
      <div>
        <h2>Invoice</h2>
      </div>
      <div>
        <div>
          <div>Price:</div>
          <div>${totalPrice.toFixed(2)}</div>
        </div>
        <Coupons
          coupons={coupons}
          selectedCoupon={selectedCoupon}
          totalPrice={totalPrice}
          selectCoupon={selectCoupon}
          removeCoupon={removeCoupon}
        />
        <div className="total">
          <div>Total:</div>
          <div>${finalPrice.toFixed(2)}</div>
        </div>
      </div>
      <div className="checkout-button">
        <Button classes="primary" label="Checkout" />
      </div>
    </div>
  );
}

index.displayName = "FinalPrice";

export default index;
