import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const baseURLback = "https://mygarage-back.onrender.com/"; //prod
const baseURLback = "http://localhost:3000/"; //dev

export const axiosInstance = axios.create({
  baseURL: baseURLback,
});

export const pingpongtest = createAsyncThunk(
  "auth/ping",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("auth/ping");
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postregister = createAsyncThunk(
  "auth/register",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.post("auth/register");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
