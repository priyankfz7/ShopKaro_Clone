import { auth_login, auth_logout } from "../actiontypes/auth.actiontypes";

const intData = {
  isauth: localStorage.getItem("token") ? true : false,
  token: "" || localStorage.getItem("token"),
};
export const authReducer = (state = intData, { type, payload }) => {
  switch (type) {
    case auth_login: {
      localStorage.setItem("token", payload);
      return { ...state, isauth: true, token: payload };
    }
    case auth_logout: {
      localStorage.removeItem("token");
      return { ...state, isauth: false, token: "" };
    }
    default: {
      return state;
    }
  }
};
