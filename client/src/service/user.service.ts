import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../api/axios";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (user: any) => {
    try {
      const response = await instance.post(`users/register`, user);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user: any) => {
    try {
      const response = await instance.post(`users/login`, user);
      return response.data;
    } catch (error) {
      return error;
    }
  }
)