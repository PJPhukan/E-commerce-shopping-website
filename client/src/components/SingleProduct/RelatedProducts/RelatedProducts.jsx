import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";

const RelatedProducts = ({ productId, categoryId }) => {
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${categoryId}&[filters][id][$ne]=${productId}&pagination[start]=0&pagination[limit]=4`
  );

  return (
    <div className="related-products">
      <Products products={data} headingText="Related Products" />
    </div>
  );
};

export default RelatedProducts;
