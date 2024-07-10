// Checkout/Checkout.js
import React from "react";

function Checkout({ cartItems }) {
  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.newPrice}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Checkout;
