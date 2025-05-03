import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utails/context";

const CartItem = () => {
  const { cartItems,handleCartProductQuantity, handleRemoveFromCart } =
    useContext(Context);

  return (
    <div className="cart-products">
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div key={item.id} className="cart-product">
            <div className="img-container">
              <img
                src={process.env.REACT_APP_DEV_URL + item.img[0].url}
                alt=""
              />
            </div>
            <div className="product-details">
              <span className="name">{item.title}</span>
              <MdClose className="close-btn" onClick={()=>handleRemoveFromCart(item)}/>
              <div className="quantity-buttons">
                <span onClick={()=>handleCartProductQuantity('dec',item)}>-</span>
                <span>{item.quantity}</span>
                <span onClick={()=>handleCartProductQuantity('inc',item)}>+</span>
              </div>
              <div className="text">
                <span>{item.quantity}</span>
                <span>x</span>
                <span className="highlight">&#8377;{item.price * item.quantity}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CartItem;
