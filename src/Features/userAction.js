import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

export default getUsers;
