import { useEffect, useReducer, useState } from "react";
import { reducer } from "../../Reducer/ProductTotalReducer/ProductTotal";

const UseEffectOfProduct = (number = 1) => {
  const [state, dispatch] = useReducer(reducer, { total: 0 });
  const [product, setProduct] = useState(null);
 
  useEffect(() => {
    const controller = new AbortController();
    const url = `https://fitsole.shop/_next/data/E4pRpCoJWMQPVFUQhz1FH/products/essentials-3-stripes-t-shirt.json?slug=essentials-3-stripes-t-shirt`;
    fetch(url, { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "getting-length",
          total: data.data.products.length,
        });

        // for pagination calculations:
        const n = parseInt(number.number) - 1;

        setProduct(data.data.products.slice(n * 24, n * 24 + 24));

        
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      controller.abort();
    };
  }, [number]);

  return {
    state,
    product,
  };
};

export default UseEffectOfProduct;
