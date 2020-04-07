import { combineReducers } from "redux";
import reducer from "./cart";
const rootReducer = combineReducers({
  cartState: reducer,
});
export default rootReducer;
