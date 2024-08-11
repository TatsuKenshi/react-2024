import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../reducer";
import cartItems from "../data";
import { getTotals } from "../utils";
import {
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR_CART,
  LOADING,
  DISPLAY_ITEMS,
} from "../actions";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const initialState = {
  isLoading: false,
  cart: new Map(),
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    try {
      const response = await fetch(url);
      const cart = await response.json();
      dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        ...state,
        clearCart,
        increase,
        decrease,
        remove,
        totalAmount,
        totalCost,
      }}
      r
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

// maps are collections of key-value pairs. However, both keys and values can be any data type. Whereas, in objects, keys HAVE TO be strings.

// map also has the "delete" method which outright deletes the key with the matching value of the passed property. No need to iterate over it, like we need to iterate over arrays.
