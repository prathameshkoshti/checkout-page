import React from "react";
import "./style.css";

export default function index({ coupon, totalPrice, handleChange }) {
  return (
    <>
      <input
        type="radio"
        id={coupon.code}
        name="coupon"
        disabled={totalPrice < coupon.minPrice}
        onChange={handleChange}
        value={coupon.code}
      />
      <label
        className={`coupon ${totalPrice < coupon.minPrice ? "disabled" : ""}`}
        htmlFor={coupon.code}
      >
        <div className="coupon-code">{coupon.code}</div>
        <div className="coupon-desc">{coupon.desc}</div>
      </label>
    </>
  );
}
