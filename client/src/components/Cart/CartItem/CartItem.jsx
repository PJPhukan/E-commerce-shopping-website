import { MdClose } from "react-icons/md"
import productImg from '../../../assets/products/speaker-prod-3.webp'
import "./CartItem.scss";
const CartItem = () => {
    return <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img src={productImg} alt="" />
            </div>
            <div className="product-details">
                <span className="name">Product name</span>
                <MdClose className="close-btn" />
                <div className="quantity-buttons">
                    <span>-</span>
                    <span>4</span>
                    <span>+</span>
                </div>
                <div className="text">
                    <span>3</span>
                    <span>x</span>
                    <span className="highlight">&#8377;3782.97</span>
                </div>
            </div>
        </div>
    </div>;
};

export default CartItem;
