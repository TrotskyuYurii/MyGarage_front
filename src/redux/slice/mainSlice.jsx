import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLogged = true; // Встановлюємо прапорець isLogged в true
    },
    logOut: (state) => {
      state.isLogged = false; // Встановлюємо прапорець isLogged в false
    },
  },
});

export const { logIn, logOut } = mainSlice.actions;

export default mainSlice.reducer;
