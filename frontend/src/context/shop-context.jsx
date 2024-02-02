import { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce(
      (total, item) => total + item.prix * item.quantity,
      0
    );
  };

  const handleClickAdd = (item) => {
    let isPresent = false;
    const updatedCart = cart.map((product) => {
      if (item.id === product.id) {
        isPresent = true;
        return { ...product, quantity: product.quantity + item.quantity };
      }
      return product;
    });

    if (isPresent) {
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
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
