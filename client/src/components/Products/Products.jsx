import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ products, innerPage, headingText }) => {
  return (
    <div className="products-container">
      {!innerPage && (
        <div className="sec-heading">
          {headingText ? headingText : " section heading"}
        </div>
      )}
      <div className="products">
        {products &&
          products.data.map((product) => (
            <Product key={product.id} id={product.id} data={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
