import React, { useContext } from "react";
import Products from "../products";
import { ShopContext } from "../context/Shop-Context";
import CartItem from "../components/CartItem";
import "../style sheets/CartItem.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1> Your Cart Items</h1>
      </div>
      <div className="CartITems">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        // adding and removing items from the cart
        <div className="checkout">
          <p> Subtotal: ${totalAmount}</p>
          <div className="checkout-button-container">
            <button onClick={() => navigate("/")}> Continue Shopping</button>
            <button> Checkout </button>
          </div>
        </div>
      ) : (
        <h1> Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
