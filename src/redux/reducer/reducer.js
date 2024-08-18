import { combineReducers } from "redux";
import mainSlice from "../slice/mainSlice.jsx"; 

const rootReducer = combineReducers({
  mainSlice, 
});

export default rootReducer;
