import { combineReducers } from "redux";
import cart from "./cart/reducer";
import discount from "./discount/reducer";

const reducers = combineReducers({
  cart,
  discount
});

export default reducers;
