import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

//user is key and goes to user we want
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;