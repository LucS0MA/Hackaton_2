import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return storedCart;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce(
      (total, item) => total + item.prix * item.quantity,
      0
    );
  };

  const getTotalItems = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleClickAdd = (item) => {
    const existingItem = cart.find((product) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + item.quantity }
          : product
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item }]);
    }
  };

  const handleClickRemove = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Number(item.quantity) + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
        : item
    );
    setCart(updatedCart);
  };

  const contextValue = {
    cart,
    total: calculateTotalPrice(cart),
    handleClickAdd,
    handleClickRemove,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    getTotalItems: getTotalItems(cart),
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
