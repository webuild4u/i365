import axios from "axios";
const getProductsByCategoryId = (categoryId) => {
  const requestOptions = {
    method: "GET",
  };

  return fetch(
    `https://tedapi.technosoftcorp.net/products-api/v1/categories/1/products`,
    requestOptions
  ).then(handleResponse);

  // let result = await axios.get(
  //   `https://tedapi.technosoftcorp.net/products-api/v1/categories/1/products`
  // );
  // return result;
};
const getProductDetailsById = async (productId) => {
  return { id: 1 };
};

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        //logout();
        //location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

const productService = {
  getProductDetailsById,
  getProductsByCategoryId,
};

// getUsers = () => async (dispatch) => {
//   try {
//     const res = await axios.get(`http://jsonplaceholder.typicode.com/users`);
//     dispatch({
//       type: GET_USERS,
//       payload: res.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: USERS_ERROR,
//       payload: console.log(e),
//     });
//   }
// };
export default productService;
