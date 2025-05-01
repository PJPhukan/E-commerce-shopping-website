import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import { fetchData } from "../../utails/api";
import { Context } from "../../utails/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    GetCategories();
    GetProducts();
  }, []);
  // eslint-disable-next-line

  const GetCategories = () => {
    fetchData("/api/categories?populate=*")
      .then((res) => {
        console.log(res);
        setCategories(res);
      })
      .catch((err) => {
        console.log("Error Occured while hiting endpoint /api/categories", err);
      });
  };
  const GetProducts = () => {
    fetchData("/api/products?populate=*")
      .then((res) => {
        console.log(res);
        setProducts(res);
      })
      .catch((err) => {
        console.log("Error Occured while hiting endpoint /api/products", err);
      });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
