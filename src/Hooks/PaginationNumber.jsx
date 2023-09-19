import { createContext } from "react";
import UseEffectOfProduct from "../Component/Products/UseEffectOfProduct";

export const PaginationaNumber = createContext();

export default function Pagination({ children }) {
  const { state: { total: total = 0 } = {} } = UseEffectOfProduct();


  return (
    <PaginationaNumber.Provider value={total}>
      {children}
    </PaginationaNumber.Provider>
  );
}
