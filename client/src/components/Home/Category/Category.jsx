import { useNavigate } from "react-router-dom";

import "./Category.scss";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories &&
          categories.data?.map((category) => (
            <div
              className="cetegory"
              key={category.id}
              onClick={() => navigate(`/category/${category.id}`)}
            >
              <img
                src={process.env.REACT_APP_DEV_URL + category.img.url}
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
