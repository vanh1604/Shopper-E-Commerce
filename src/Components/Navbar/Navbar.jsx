import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>shopper</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop{" "}
          </Link>

          {menu === "shop" && <div className="active"></div> ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men{" "}
          </Link>
          {menu === "mens" && <div className="active"></div> ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women{" "}
          </Link>
          {menu === "womens" && <div className="active"></div> ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("kid");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kid">
            Kids{" "}
          </Link>
          {menu === "kid" && <div className="active"></div> ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button>login</button>{" "}
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="" />{" "}
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
