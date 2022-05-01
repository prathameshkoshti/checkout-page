import React, { useState } from "react";
import "./style.css";
import Coupon from "../Coupon";
import Button from "../Button";

function Index({ isOpen, coupons, totalPrice, selectCoupon, toggleModal }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (e) => {
    selectCoupon(value);
    toggleModal();
  };

  return (
    <>
      {isOpen ? (
        <div className="modal-wrapper">
          <div className="overlay"></div>
          <div className="modal">
            <div className="flex modal-header">
              <div>Select a coupon</div>
              <i onClick={toggleModal} class="fas fa-times close-modal-btn"></i>
            </div>
            <div className="modal-body">
              {coupons.map((coupon) => (
                <Coupon
                  key={`${coupon.code}-coupon`}
                  coupon={coupon}
                  totalPrice={totalPrice}
                  handleChange={handleChange}
                />
              ))}
              <div className="flex modal-button">
                <Button
                  classes="primary"
                  onClick={handleClick}
                  label="Apply Coupon"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

Index.defaultName = "Coupon Modal";

export default Index;
