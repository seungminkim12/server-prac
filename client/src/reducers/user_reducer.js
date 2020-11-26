import { LOGIN_USER, LOGOUT } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };

    case LOGOUT:
      return { ...state };

    default:
      return state;
  }
}
