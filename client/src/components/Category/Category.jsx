import "./Category.scss";
import Products from '../Products/Products'
const Category = () => {
    return <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
                Category Title
            </div>
            <div className="product-container">

            <Products innerPage={true}/>
            </div>
        </div>
    </div>;
};

export default Category;
