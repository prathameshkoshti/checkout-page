import React, { useEffect, useState } from "react";
import Cart from "../../components/Cart";
import FinalPrice from "../../components/FinalPrice";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Index() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [coupons, setCoupons] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const selectCoupon = (couponId) => {
    const coupon = coupons.find((coupon) => coupon.code === couponId);
    setSelectedCoupon(coupon);
  };

  const removeCoupon = event => {
    setSelectedCoupon(null);
    event.stopPropagation();
  };

  const toggleProduct = (event) => {
    const checked = event.target.checked;
    const { productId } = event.target.dataset;
    const copyOfCart = { ...cart };
    copyOfCart[productId] = {
      ...copyOfCart[productId],
      isChecked: checked,
    };
    setCart(copyOfCart);
  };

  const updateQuantity = (productId, quantity) => {
    const copyOfCart = { ...cart };
    copyOfCart[productId] = {
      ...copyOfCart[productId],
      quantity,
    };

    setCart(copyOfCart);
  };

  useEffect(() => {
    // fetch products
    (async () => {
      const response = await fetch(
        "https://mocki.io/v1/d480dfda-8797-4916-b6b8-5d942107994c"
      ).then((response) => response.json());

      setProducts(response.products);
    })();

    // fetch coupons
    (async () => {
      const response = await fetch(
        "https://mocki.io/v1/bc6df0a5-4e1f-44c7-ad19-114dd85e8b1d"
      ).then((response) => response.json());

      setCoupons(response.coupons);
    })();
  }, []);

  useEffect(() => {
    const cart = {};
    products.forEach((product) => {
      cart[product.id] = {
        quantity: 1,
        isChecked: true,
      };
    });
    setCart(cart);
  }, [products]);

  useEffect(() => {
    const totalPrice = products.reduce((acc, product) => {
      return (
        acc +
        (cart[product.id] &&
          cart[product.id].isChecked &&
          (cart[product.id].quantity || 1)) *
          product.price
      );
    }, 0.0);
    setTotalPrice(totalPrice);

    if (selectedCoupon && totalPrice < selectedCoupon.minPrice) {
      setSelectedCoupon(null);
    }
  }, [cart, products]);

  useEffect(() => {
    if (selectedCoupon) {
      const finalPrice =
        totalPrice - (selectedCoupon.discount / 100) * totalPrice;
      setFinalPrice(finalPrice);
    } else {
      setFinalPrice(totalPrice);
    }
  }, [totalPrice, selectedCoupon]);

  return (
    <div>
      <Navbar />
      <h1 className="page-header">Checkout</h1>
      <div className="container">
        <Cart
          products={products}
          cart={cart}
          toggleProduct={toggleProduct}
          updateQuantity={updateQuantity}
        />
        <FinalPrice
          coupons={coupons}
          totalPrice={totalPrice}
          finalPrice={finalPrice}
          selectedCoupon={selectedCoupon}
          selectCoupon={selectCoupon}
          removeCoupon={removeCoupon}
        />
      </div>
      <Footer />
    </div>
  );
}

Index.displayName = "Checkout";

export default Index;
