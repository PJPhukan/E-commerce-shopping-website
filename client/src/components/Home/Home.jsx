import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect } from "react";
import { fetchData } from "../../utails/api";

const Home = () => {
  useEffect(() => {
    GetCategories();
  }, []);

  const GetCategories = () => {
    fetchData("/api/categories?populate=*")
      .then((res) => {
        console.log("Hello world");
        console.log(res);
      })
      .catch((err) => {
        console.log("Error Occured while hiting endpoint /api/categories", err);
      });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          <Products headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
