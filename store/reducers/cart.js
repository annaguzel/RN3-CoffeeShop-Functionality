
import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/actionTypes";
const initialState = {
  items: []
};

const reducer=(state = initialState, action) => {
    switch (action.type) {
      case ADD_ITEM:
      const itemToBeAdded = action.payload;
        return {
          ...state,
          items: [...state.items,itemToBeAdded]
        };
      
      case REMOVE_ITEM:
        const itemToBeRemoved=action.payload;
       return {
        ...state,
        items: state.items.filter((stateItem)=>stateItem !== itemToBeRemoved),
      };
      case CHECKOUT:
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};
export default reducer;