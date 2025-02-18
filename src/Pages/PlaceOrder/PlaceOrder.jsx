import React, { useContext } from "react";
import "./PlaceOrder.css";
import { Storecontext } from "../../context/Storecontext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(Storecontext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="tittle">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Adress" />
        <input
          type="text"
          placeholder="Street
        "
        />
        <div className="multi-field">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>{" "}
        <div className="multi-field">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detial">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detial">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 99}</p>
            </div>
            <hr />
            <div className="cart-total-detial">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 99}
              </b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
