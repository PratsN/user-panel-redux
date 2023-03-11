import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const { getUsers } = userSlice.actions;
export const getAllUsers = (state) => state.users.users;
export default userSlice.reducer;
