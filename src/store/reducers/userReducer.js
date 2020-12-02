import { INITIALIZE_USER_SESSION } from "../action-types/UserActionTypes";

const initState = {
  user: {},
  isUserAuthenticated: false,
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case INITIALIZE_USER_SESSION:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
export default userReducer;
