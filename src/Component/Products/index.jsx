import ProductDisplay from "./ProductDisplay";
import "./index.css";

const Product = ({ number, select }) => {
  return (
    <>
      <ProductDisplay number={number} select={select} />
    </>
  );
};

export default Product;
