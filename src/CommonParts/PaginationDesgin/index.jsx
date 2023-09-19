import { Pagination } from "antd";
import "./index.css";
import { useContext } from "react";
import { PaginationaNumber } from "../../Hooks/PaginationNumber";

const PaginationDesign = ({ onChange }) => {
  const value = useContext(PaginationaNumber);

  return value > 0 ? (
    <div className="flex justify-content align-items pagination--design">
      <Pagination
        className="pagination--text"
        onChange={(NumberOfPage) => onChange(NumberOfPage)}
        defaultCurrent={1}
        total={value}
        defaultPageSize={24}
      />
    </div>
  ) : null;
};

export default PaginationDesign;
