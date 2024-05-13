import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { json } from "react-router-dom";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
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
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
      toast.success("item added to cart");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState))
      return defaultState;
    },
    removeItem: (state, { payload }) => {
      const {cardID} = payload;
      const product = state.cartItems.find((i)=> i.cardID === cardID)
      state.cartItems = state.cartItems.filter((i)=> i.cardID !== cardID)

      state.numItemsInCart -= product.amount;
      cartSlice.caseReducers.calulateTotols(state)
      toast.success("Card update")

    },
    editItem: (state, { payload }) => {
    const {cardID, amount} = payload;
    const item = state.cartItems.find((i)=> i.cardID === cardID)
    state.numItemsInCart += amount - item.amount
    state.cartTotal += item.price * (amount - item.amount)
    item.amount = amount;
    cartSlice.caseReducers.calulateTotols(state)
    toast.success("Card update")
    },

    calulateTotols: (state)=>{
      state.tex = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem("cart", JSON.stringify(state))
    }
  },
});



export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
