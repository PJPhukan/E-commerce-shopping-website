import "./Product.scss";

import productImg from '../../../assets/products/earbuds-prod-1.webp'

const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={productImg} alt="" />
        </div>
        <div className="product-details">
            <span className="name">Product name is that which is not defined yet</span>
            <span className="price">&#8377;399</span>
        </div>
    </div>;
};

export default Product;
