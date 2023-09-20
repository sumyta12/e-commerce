import { useState } from "react";
import "./Card.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { style } from "./stylefile";

export default function CardDesign({
  title = "",
  images: { nodes: [{ x1: x1 = "" } = {}] = [] } = {},
  priceRange: {
    minVariantPrice: {
      amount: p_amount = "",
      currencyCode: p_currencyCode = "",
    } = {},
  } = {},
  compareAtPriceRange: {
    minVariantPrice: {
      amount: c_amount = "",
      currencyCode: c_currencyCode = "",
    } = {},
  } = {},
  variants: { nodes: nodes = [] } = {},
  ...rest
}) {
  const [select, setSelect] = useState(0);

  const seletednodes =
    nodes?.map((node) => {
      return node?.selectedOptions[1]?.value;
    }) || [];

  const totalslice = Math.ceil(seletednodes.length / 3) - 1 || 0;

  const result = seletednodes
    ?.slice(select * 3, select * 3 + 3)
    .map((item, i) => {
      return <li key={i}>{item}</li>;
    });

  // console.log(title,seletednodes);

  return (
    <div
      className="card"
      onClick={() => {
        console.log(rest);
      }}>
      <div className="card-img">
        <div className="wishlist--css">
          <h3>Add to WishList</h3>
        </div>

        <img alt="example" src={x1} />

        {seletednodes?.length > 0 && (
          <div className="image--outside--layer">
            <div className="slider--size--design">
              <MdOutlineKeyboardArrowLeft
                style={select === 0 ? style : {}}
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  if (select) {
                    setSelect((prev) => prev - 1);
                  }
                }}
              />

              <ul>{result}</ul>

              <MdOutlineKeyboardArrowRight
                style={totalslice === select ? style : {}}
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  if (totalslice !== select) {
                    setSelect((prev) => prev + 1);
                  }
                }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="card-text-desgin">
        <div>
          <p className="font-family card-font-size">{title}</p>
        </div>

        <div className="flex align-items">
          {c_amount !== "0.0" && (
            <s className="font-family card-font-size">
              {` ${c_currencyCode} ${c_amount}`}&nbsp;
            </s>
          )}

          <p className="font-family card-font-size ">
            {" "}
            {` ${p_currencyCode} ${p_amount}`} &nbsp;
          </p>
          {
            //  if any discount arraive
          }
          <p className="font-family card-font-size discount-text-color">
            {c_amount !== "0.0" &&
              `[${(
                ((parseFloat(p_amount) - parseFloat(c_amount)) /
                  parseFloat(p_amount)) *
                100
              ).toFixed(2)}%]`}
          </p>
        </div>
      </div>
    </div>
  );
}
