import React from "react";
import "./Breadcrums.css";
import arrow_icon from "../Assets/Frontend_Assets/breadcrum_arrow.png";
const Breadcrums = (props) => {
  const { products } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {products.category} <img src={arrow_icon} alt="" /> {products.name}
    </div>
  );
};

export default Breadcrums;
