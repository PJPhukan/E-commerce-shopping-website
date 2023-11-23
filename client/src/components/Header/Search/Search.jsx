import { MdClose } from 'react-icons/md'
import productImg from '../../../assets/products/watch-prod-1.webp'
import "./Search.scss";
const Search = ({ setShowSearch }) => {
    return <div className='search-model'>
        <div className="form-field">
            <input
                type="text"
                autoFocus
                placeholder='Search for products'
            />
            <MdClose onClick={() => { setShowSearch(false) }} className='close-btn' />
        </div>
        <div className="search-result-content">
            <div className="search-results">
                <div className="search-result-item">
                    <div className="img-container">
                        <img src={productImg} alt="" />
                    </div>
                    <div className="product-details">
                        <span className="name">Product name</span>
                        <span className="description">Product Description</span>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Search;
