import { combineReducers } from "redux";
import mainSlice from "../slice/mainSlice.jsx"; // Шлях правильний, але потрібно змінити використання

const rootReducer = combineReducers({
  mainSlice, // Використовуйте правильний ключ, замість `mainSlice`
});

export default rootReducer;
