import {
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR_CART,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

export const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type === REMOVE) {
    const id = action.payload.id;
    const newCart = new Map(state.cart);
    newCart.delete(id);
    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE) {
    const id = action.payload.id;
    const newCart = new Map(state.cart);
    const item = newCart.get(id);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(id, newItem);
    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE) {
    const id = action.payload.id;
    const newCart = new Map(state.cart);
    const item = newCart.get(id);

    if (item.amount === 1) {
      newCart.delete(id);
      return { ...state, cart: newCart };
    }

    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(id, newItem);
    return { ...state, cart: newCart };
  }

  if (action.type === LOADING) {
    return { ...state, isLoading: true };
  }

  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]));
    return { ...state, isLoading: false, cart: newCart };
  }

  throw new Error(`No matching action type: ${action.type}`);
};
