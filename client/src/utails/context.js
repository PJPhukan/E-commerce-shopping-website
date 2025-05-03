import { useEffect } from "react";
import { React, createContext, useState } from "react";
import { useLocation } from "react-router-dom";
export const Context = createContext();

export default function AppContext({ children }) {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.quantity;
    });
    setCartCount(count);

    let subTotal = 0;
    cartItems.forEach((item) => {
      subTotal += item.price * item.quantity;
    });
    setCartSubTotal(subTotal);
  }, [cartItems]);

  const handleAddToCart = (product, quentity) => {
    let items = [...cartItems];
    let index = items.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      items[index].quantity = quentity;
    } else {
      product.quantity = quentity;
      items.push(product);
    }
    setCartItems(items);
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((item) => item.id !== product.id);
    setCartItems(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((item) => item.id === product.id);
    if (type === "inc") {
      items[index].quantity += 1;
    } else if (type === "dec") {
      if (items[index].quantity === 1) return;
      items[index].quantity -= 1;
    }
    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
}
