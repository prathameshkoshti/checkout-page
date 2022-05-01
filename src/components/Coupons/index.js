import React, { useState } from "react";
import CouponModal from "../CouponModal";
import "./style.css";

function Index({
  coupons,
  totalPrice,
  selectedCoupon,
  selectCoupon,
  removeCoupon,
}) {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);

  const toggleModal = () => {
    setIsCouponModalOpen(!isCouponModalOpen);
  };

  return (
    <div className="coupon-container flex">
      <div className="">Coupon:</div>
      <div className="selected-coupon-details">
        <div className="selected-coupon" onClick={toggleModal}>
          {selectedCoupon ? (
            <div>
              {selectedCoupon.code}
              <div className="remove-coupon" onClick={removeCoupon}>
                <i className="fas fa-times"></i>
              </div>
            </div>
          ) : (
            "Apply Coupon"
          )}
        </div>
      </div>
      <CouponModal
        isOpen={isCouponModalOpen}
        coupons={coupons}
        totalPrice={totalPrice}
        selectCoupon={selectCoupon}
        toggleModal={toggleModal}
      />
    </div>
  );
}

Index.displayName = "Coupons";

export default Index;
