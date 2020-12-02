import { GET_PRODUCTS } from "../action-types/ProductActionTypes";
import productService from "../../services/ProductService";
export const getProducts = (id) => {
  return (dispatch) => {
    productService.getProductsByCategoryId(1)
    .then(
      (products) => {
        dispatch(success(products));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
  function success(products) {
    return { type: GET_PRODUCTS, payload: products };
  }
  function failure(error) {
    return { type: "LOGIN_FAILURE", error };
  }
};
