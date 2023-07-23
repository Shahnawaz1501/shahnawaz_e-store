import React, {  useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import CartItem from "./CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.scss";

const Cart = ({ setShowCart, selectedData, count }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(count);
  const [price] = useState(selectedData.price);
  const [totalPrice, setTotalPrice] = useState(1);
  useEffect(() => {
    setTotalPrice((totalPrice) => value * price || count * price);
  }, [price, value, count]);

  const getData = (val) => {
    setValue((val) => val + 1);
  };
  let checkoutHandler = () => {
    alert("Payment Completed Successfully!!");
    navigate("/");
  };
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        <>
          <CartItem
            selectedData={selectedData}
            count={count}
            getData={getData}
          />

          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal:</span>
              <span className="text total">
                {" "}
                &#8364; {value * selectedData.price}
              </span>
            </div>
            <div className="button">
              <button className="checkout-cta" onClick={checkoutHandler}>
                Checkout
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
