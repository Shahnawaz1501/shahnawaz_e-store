import "./CartItem.scss";
import { useState } from "react";

const CartItem = ({ selectedData, count, getData }) => {
  let [updatedCount, setUpdatedCount] = useState(count);

  let increaseHandler = () => {
    setUpdatedCount((updatedCount) => updatedCount + 1);
    getData(updatedCount);
  };
  let decreaseHandler = () => {
    setUpdatedCount((updatedCount) =>
      updatedCount > 1 ? updatedCount - 1 : updatedCount
    );
    getData(updatedCount);
  };
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={selectedData.images} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">{selectedData.title}</span>

          <div className="quantity-buttons">
            <span onClick={decreaseHandler}>-</span>
            <span>{updatedCount}</span>
            <span onClick={increaseHandler}>+</span>
          </div>
          <div className="text">
            <span>{updatedCount} </span>
            <span>x </span>
            <span>&#8364; {selectedData.price} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
