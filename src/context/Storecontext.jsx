import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const Storecontext = createContext("null");
const StorecontextProvider = (props) => {
  const [cartitem, setcartitem] = useState({});
  const addtocard = (itemId) => {
    if (!cartitem[itemId]) {
      setcartitem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeCartitem = (itemId) => {
    setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        let totalinfo = food_list.find((product) => product._id === item);
        totalAmount += totalinfo.price * cartitem[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    addtocard,
    removeCartitem,
    cartitem,
    setcartitem,
    getTotalCartAmount,
  };
  return (
    <Storecontext.Provider value={contextValue}>
      {props.children}
    </Storecontext.Provider>
  );
};
export default StorecontextProvider;
