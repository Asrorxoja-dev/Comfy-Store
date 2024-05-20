import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const calculateTotals = (state) => {
  state.tax = 0.1 * state.cartTotal;
  state.orderTotal = state.cartTotal + state.shipping + state.tax;
  localStorage.setItem("cart", JSON.stringify(state));
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return defaultState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return defaultState;
  }
};


const cartSlice = createSlice({
  name: "cart",
 initialState: loadState(),
  reducers: {
    addItem: (state, { payload }) => {
      const { product } = payload;

      const item = state.cartItems.find((i) => i.cardID === product.cardID);

      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      calculateTotals(state);
      toast.success("Item added to cart");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      toast.success("Cart cleared");
      return defaultState;
    },
    removeItem: (state, { payload }) => {
      const { cardID } = payload;
      const product = state.cartItems.find((i) => i.cardID === cardID);
      if (product) {
        state.cartItems = state.cartItems.filter((i) => i.cardID !== cardID);
        state.numItemsInCart -= product.amount;
        state.cartTotal -= product.price * product.amount;
        calculateTotals(state);
        toast.success("Item removed from cart");
      }
    },
    editItem: (state, { payload }) => {
      const { cardID, amount } = payload;
      const item = state.cartItems.find((i) => i.cardID === cardID);
      if (item) {
        state.numItemsInCart += amount - item.amount;
        state.cartTotal += item.price * (amount - item.amount);
        item.amount = amount;
        calculateTotals(state);
        toast.success("Item updated in cart");
      }
    },
  },
});


export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
