import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/Frontend_Assets/all_product";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 1; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartitems] = useState(getDefaultCart());

  console.log(cartItems);
  const addToCart = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const removeFromToCart = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const getTotalCartItems = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCount += cartItems[item];
      }
    }
    return totalCount;
  };
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromToCart,
    getTotalCartAmount,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
