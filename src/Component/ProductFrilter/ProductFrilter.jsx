const filterData = [
  "Sort by : Featured",
  "Alphabetically , A-Z",
  "Alphabetically , Z-A",
  "Price, low to high",
  "Price, high to low",
  "Date,old to new",
  "Date,new to old",
];

import { useState } from "react";
import "./index.css";

const ProductFrilter = ({ onChange }) => {
  const [selete, setSelect] = useState(filterData[0]);

  const DropdownShow = filterData.map((data, i) => {
    return (
      <option key={i} value={data}>
        {data}
      </option>
    );
  });

  return (
    <div className="flex justify-between filtermaincss">
      <div>
        <span>Result : []</span>
      </div>

      <div className="filter--classes flex">
        <div>
          <select
            className="dropdown-css"
            value={selete}
            onChange={(event) => {
              onChange(event.target.value)
              setSelect(event.target.value);
            }}>
            {DropdownShow}
          </select>
        </div>

        <div className="open--filter">
          <p>Open Filter</p>
        </div>
      </div>
    </div>
  );
};

export default ProductFrilter;
