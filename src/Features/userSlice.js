import { createSlice } from "@reduxjs/toolkit";
import getUsers from "./userAction";

const initialState = {
  users: [],
  usersContainer: [],
  errors: {},
  user: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    filterUsers: (state, action) => {
      state.users = state.usersContainer.filter(
        (user) =>
          user.name.toLowerCase().includes(action.payload) ||
          user.username.toLowerCase().includes(action.payload)
      );
    },
    setFilter: (state, action) => {
      state.users = state.usersContainer.filter((user) =>
        user.name.includes(action.payload)
      );
    },
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.loader = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loader = false;
      state.users = action.payload;
      state.usersContainer = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
  },
});

export const { filterUsers, setFilter } = userSlice.actions;
export default userSlice.reducer;
