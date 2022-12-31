import { BASE_URL } from "./../constants/common";
import { SignUpParams, LoginParams, SignUpResponse, LoginResponse } from "types/auth";

const AuthApi = {
  signUp: async (params: SignUpParams) => {
    const response: SignUpResponse = await (
      await fetch(`${BASE_URL}/users/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      })
    ).json();
    return response;
  },

  login: async (params: LoginParams) => {
    const response: LoginResponse = await (
      await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      })
    ).json();
    return response;
  },
};

export default AuthApi;
