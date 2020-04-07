import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "./actionTypes";
export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
export const removeItemFromCart = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};
export const checkoutCart = () => {
  return {
    type: CHECKOUT,
  };
};