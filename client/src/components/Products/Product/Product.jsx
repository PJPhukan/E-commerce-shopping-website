import "./Product.scss";


const Product = ({ id, data }) => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={process.env.REACT_APP_DEV_URL + data.img[0].url} alt="" />
      </div>
      <div className="product-details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
