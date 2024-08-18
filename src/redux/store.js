import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/reducer";
// import { devToolsEnhancer } from "@redux-devtools/extension";

// const enhancer = devToolsEnhancer();

const store = configureStore({
  reducer: rootReducer,
});


export default store;
