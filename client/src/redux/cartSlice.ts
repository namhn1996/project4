import { createSlice } from "@reduxjs/toolkit";
import { GetOneCart, cartCreate, cartUpdate } from "../service/cart.serivice";

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [],
    status: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cartCreate.pending, (state) => {
        state.status = true; // Trạng thái chọc load dữ liệu
      })
      .addCase(cartCreate.fulfilled, (state, action) => {
        state.status = false;
        state.carts = action.payload.data;
        state.error = null;
      })
      .addCase(cartCreate.rejected, (state, action) => {
        state.status = false;
        state.carts = [];
        state.error = action.payload as any; // "Có lỗi xảy ra"
      })
      .addCase(GetOneCart.pending, (state) => {
        state.status = true; // Trạng thái chọc load dữ liệu
      })
      .addCase(GetOneCart.fulfilled, (state, action) => {
        state.status = false;
        state.carts = action.payload;
        state.error = null;
      })
      .addCase(GetOneCart.rejected, (state, action) => {
        state.status = false;
        state.carts = [];
        state.error = action.payload as any; // "Có lỗi xảy ra"
      })
      .addCase(cartUpdate.pending, (state) => {
        state.status = true; // Trạng thái chọc load dữ liệu
      })
      .addCase(cartUpdate.fulfilled, (state, action) => {
        state.status = false;
        state.carts = action.payload.data;
        state.error = null;
      })
      .addCase(cartUpdate.rejected, (state, action) => {
        state.status = false;
        state.carts = [];
        state.error = action.payload as any; // "Có lỗi xảy ra"
      });
  },
});

export default cartSlice.reducer;
