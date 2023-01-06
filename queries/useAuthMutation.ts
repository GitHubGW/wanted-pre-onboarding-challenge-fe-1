import { useMutation } from "react-query";
import AuthApi from "api/auth";
import { SignUpParams, LoginParams } from "types/auth";

const useAuthMutation = () => {
  const useSignUpMutation = () => {
    const result = useMutation({
      mutationFn: (params: SignUpParams) => AuthApi.signUp(params),
      onSuccess: (response) => {
        console.log("useSignUp onSuccess", response);
      },
      onError: (error) => {
        console.log("useSignUp onError", error);
      },
    });
    return result;
  };

  const useLoginMutation = () => {
    const result = useMutation({
      mutationFn: (params: LoginParams) => AuthApi.login(params),
      onSuccess: (response) => {
        console.log("useLogin onSuccess", response);
      },
      onError: (error) => {
        console.log("useLogin onError", error);
      },
    });
    return result;
  };

  return { useSignUpMutation, useLoginMutation };
};

export default useAuthMutation;
