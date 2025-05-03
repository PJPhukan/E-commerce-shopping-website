import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utails/context";
const Cart = ({ setShowCart }) => {
  const { cartSubTotal, cartItems } = useContext(Context);
  const setShowCartAdd = () => {
    setShowCart(false);
  };
  return (
    <div className="cart-panel">
      <div className="opacity-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-button" id="addcls" onClick={setShowCartAdd}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>

        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span> No products in the cart.</span>
            <button className="return-to-cart"> RETURN TO SHOP</button>
          </div>
        )}
        {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="sub-total">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377;{cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta">Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
