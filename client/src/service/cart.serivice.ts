import { Cart } from "../entities/cart.entities";
import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../api/axios";

export const cartCreate = createAsyncThunk(
  "carts/cartCreate",
  async (cart: any) => {
    try {
      const response = await instance.post(`carts`, cart);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const GetOneCart = createAsyncThunk(
  "carts/GetOneCart",
  async (id: number) => {
    try {
      const data = await instance.get(`carts/${+id}`);
      return data.data.cart;
    } catch (error) {
      return error;
    }
  }
);

export const cartUpdate = createAsyncThunk(
  "carts/cartUpdate",
  async (cart: Cart) => {
    try {
      const response = await instance.put(`carts/${+cart.product_id}`, cart);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

