import { useReducer, useState } from "react";
import PaginationDesign from "../CommonParts/PaginationDesgin";
import Product from "../Component/Products";
import { getPageNumbereducer } from "../Reducer/ProductTotalReducer/ProductTotal";
import ProductFrilter from "../Component/ProductFrilter/ProductFrilter";
import ProductheroSection from "../Component/Products/ProductheroSection";
import HomeSection from "../Component/Home";

const ProductPage = () => {
  const [state, dispatch] = useReducer(getPageNumbereducer, { number: 1 });
  const [select, setSelect] = useState("Sort by : Featured");

  return (
    <>
      <HomeSection/>

      <ProductheroSection />

      <ProductFrilter
        onChange={(event) => {
          setSelect(event);
        }}
      />

      <Product number={state} select={select} />

      <PaginationDesign
        onChange={(NumberOfPage) => {
          dispatch({ type: "page", number: NumberOfPage });
        }}
      />
    </>
  );
};

export default ProductPage;
