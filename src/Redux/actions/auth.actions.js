import { auth_login, auth_logout } from "../actiontypes/auth.actiontypes";

export const login = (token) => {
  return { type: auth_login, payload: token };
};
export const logout = () => {
  return { type: auth_logout };
};
