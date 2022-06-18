import React, { createContext, useContext, useState, useEffect } from "react";

import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [oneSize, setOneSize] = useState();
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => {
        if(prevQty + 1 > 23) return 23;

        return prevQty+1;
    });
  }
  const decQty = () => {
    setQty((prevQty) => {
        if(prevQty - 1 < 1) return 1;

        return prevQty - 1;
    });
  }
  const setSize = (oneSize) => {
    setOneSize(oneSize.target.value)
    // console.log(oneSize.target.value)
  }

  return (
    <Context.Provider
      value={{ showCart, cartItems, totalPrice, totalQuantities, oneSize, qty, incQty, decQty, setSize }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context)
