import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURLback = "https://mygarage-back.onrender.com/";

export const axiosInstance = axios.create({
  baseURL: baseURLback,
});





export const pingpongtest = createAsyncThunk(
  "auth/ping",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("auth/ping");
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


