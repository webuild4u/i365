import {
  ADD_ITEM,
  INCREMENT_QTY,
  DECREMENT_QTY,
  REMOVE_ITEM,
} from "../action-types/CartActionTypes";
const initState = {
  cartItems: [],
  loadCompleted: true,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let newItem = action.payload;
      newItem.quantity = 1;
      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };
    case INCREMENT_QTY:
      let incQtyItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      incQtyItem.quantity = incQtyItem.quantity + 1;
      return {
        ...state,
        cartItems: [...state.cartItems],
      };
    case DECREMENT_QTY:
      let decQtyItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (decQtyItem.quantity === 1) {
        let new_items = state.cartItems.filter((item) => action.id !== item.id);
        return {
          ...state,
          cartItems: new_items,
        };
      } else {
        decQtyItem.quantity = decQtyItem.quantity - 1;
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      }
    case REMOVE_ITEM:
      let new_items = state.cartItems.filter((item) => action.id !== item.id);
      return {
        ...state,
        cartItems: new_items,
      };
    default:
      return state;
  }
};
export default cartReducer;
