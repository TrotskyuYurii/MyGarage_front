import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  isLogged: false,
  pingpong: "",
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLogged = true; 
    },
    logOut: (state) => {
      state.isLogged = false; 
    },
    pingpongtest: (state) => {
      state.pingpong = "";
    },
    
  },
});

export const { logIn, logOut, pingpongtest } = mainSlice.actions;

export default mainSlice.reducer;
