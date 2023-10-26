import { createSlice } from "@reduxjs/toolkit";
import { GetAllProduct, GetOneProduct } from "../service/product.service";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllProduct.pending, (state) => {
        state.status = true; // Trạng thái chờ load dữ liệu
      })
      .addCase(GetAllProduct.fulfilled, (state, action) => {
        (state.status = false),
          (state.products = action.payload.data),
          (state.error = null);
      })
      .addCase(GetAllProduct.rejected, (state, action) => {
        (state.status = false),
          (state.products = []),
          (state.error = action.payload as any); // "Có lỗi xảy ra"
      })
      .addCase(GetOneProduct.pending, (state) => {
        state.status = true; // Trạng thái chờ load dữ liệu
      })
      .addCase(GetOneProduct.fulfilled, (state, action) => {
        (state.status = false),
          (state.products = action.payload.data),
          (state.error = null);
      })
      .addCase(GetOneProduct.rejected, (state, action) => {
        (state.status = false),
          (state.products = []),
          (state.error = action.payload as any); // "Có lỗi xảy ra"
      });
  },
});

export default productSlice.reducer;
