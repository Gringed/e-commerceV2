import React, { createContext, useContext, useState, useEffect } from "react";

import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalSize, setTotalSize] = useState();
  const [oneSize, setOneSize] = useState();
  const [qty, setQty] = useState(1);

  const onAdd = (product, quantity, size) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    setTotalSize(size);
    if (checkProductInCart) {
      const updateCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updateCartItems);
      
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, {...product, oneSize}])
    }
    toast.success(
      `${qty} ${product.name} de taille ${oneSize} ajouté au panier.`
    );
  };

  const incQty = () => {
    setQty((prevQty) => {
      if (prevQty + 1 > 23) return 23;

      return prevQty + 1;
    });
  };
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };
  const setSize = (oneSize) => {
    setOneSize(oneSize.target.value);
    return oneSize;
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        oneSize,
        qty,
        incQty,
        decQty,
        setSize,
        onAdd
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
