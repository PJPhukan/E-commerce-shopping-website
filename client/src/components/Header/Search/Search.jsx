import { MdClose } from "react-icons/md";
import productImg from "../../../assets/products/watch-prod-1.webp";
import "./Search.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&[filters][title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }
  return (
    <div className="search-model">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for products"
          value={query}
          onChange={onChange}
        />
        <MdClose
          onClick={() => {
            setShowSearch(false);
          }}
          className="close-btn"
        />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data &&
            data.data.map((product) => (
              <div
                key={product.id}
                className="search-result-item"
                onClick={() => {
                  navigate(`/product/${product.id}`);
                  setShowSearch(false);
                }}
              >
                <div className="img-container">
                  <img
                    src={process.env.REACT_APP_DEV_URL + product.img[0].url}
                    alt=""
                  />
                </div>
                <div className="product-details">
                  <span className="name">{product.title}</span>
                  <span className="description">{product.desc}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
