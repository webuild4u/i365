import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_ID,
} from "../action-types/ProductActionTypes";

const initState = {
  items: [],
};
const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default productReducer;
