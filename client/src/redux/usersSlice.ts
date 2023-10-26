import { createSlice } from "@reduxjs/toolkit";
import { createUser,loginUser } from "../service/user.service";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = true; // Trạng thái chờ load dữ liệu
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = false;
        state.users = action.payload.data;
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = false;
        state.users = [];
        state.error = action.payload as any; // "Có lỗi xảy ra"
      })
      .addCase(loginUser.pending, (state) => {
        state.status = true; // Trạng thái chờ load dữ liệu
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = false;
        state.users = action.payload.data;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = false;
        state.users = [];
        state.error = action.payload as any; // "Có lỗi xảy ra"
      })
  },
});

export default userSlice.reducer;
