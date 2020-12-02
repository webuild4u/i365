import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREMENT_QTY,
  DECREMENT_QTY,
} from "../action-types/CartActionTypes";
export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const incrementQty = (id, qty) => {
  return {
    type: INCREMENT_QTY,
    payload: {
      id: id,
      qty: qty,
    },
  };
};

export const decrementQty = (id, qty) => {
  return {
    type: DECREMENT_QTY,
    payload: {
      id: id,
      qty: qty,
    },
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      id: id,
    },
  };
};
