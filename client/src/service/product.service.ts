import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../api/axios";

export const GetAllProduct = createAsyncThunk(
  "products/GetAllProduct",
  async () => {
    const response = await instance.get(`products`);
    return response.data;
  }
);

export const GetOneProduct = createAsyncThunk(
  "products/GetOneProduct",
  async (id: number) => {
    const response = await instance.get(`products/${id}`);
    return response.data;
  }
);

