import { AUTH_STATE } from "constants/auth";
import { useCallback } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormError from "./FormError";

interface FormData {
  email: string;
  password: string;
}

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onChange", defaultValues: { email: "", password: "" } });
  const [status, setStatus] = useState(AUTH_STATE.SIGN_UP);
  const isSignUp = status === AUTH_STATE.SIGN_UP;

  const onValid = useCallback(() => {}, []);

  const handleSetSignUp = useCallback(() => {
    reset();
    setStatus(AUTH_STATE.SIGN_UP);
  }, [reset, setStatus]);

  const handleSetLogin = useCallback(() => {
    reset();
    setStatus(AUTH_STATE.LOGIN);
  }, [reset, setStatus]);

  return (
    <form onSubmit={handleSubmit(onValid)} className="border-gray-200 rounded-2xl bg-white px-10 py-8 shadow-xl w-96">
      <h1 className="font-bold text-2xl text-center">{isSignUp ? "Sign Up" : "Login"}</h1>
      <div className="mt-6 flex flex-col gap-3">
        <label htmlFor="emailInput">
          <div className="text-sm mb-1">Email</div>
          <input
            {...register("email", {
              required: "이메일은 필수입니다.",
              validate: (value) => {
                const isValidText = value.includes("@") && value.includes(".");
                return isValidText || "이메일에는 @와 .이 포함되어야 합니다.";
              },
            })}
            required
            type="email"
            id="emailInput"
            className="border border-gray-300 w-full rounded-md p-1.5"
          />
          {errors.email?.message && <FormError text={errors.email.message} />}
        </label>
        <label htmlFor="passwordInput">
          <div className="text-sm  mb-1">Password</div>
          <input
            {...register("password", {
              required: "비밀번호는 필수입니다.",
              minLength: { value: 8, message: "비밀번호는 최소 8자 이상이어야 합니다." },
            })}
            required
            minLength={8}
            type="password"
            id="passwordInput"
            className="border border-gray-300 w-full rounded-md p-1.5"
          />
          {errors.password?.message && <FormError text={errors.password.message} />}
        </label>
      </div>
      <div className="flex flex-col gap-1.5 mt-6">
        <button disabled={!isValid} type="submit" className={`${isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"} p-3 rounded-md text-white text-sm `}>
          {isSignUp ? "회원가입" : "로그인"}
        </button>
        <button onClick={isSignUp ? handleSetLogin : handleSetSignUp} type="button" className="font-semibold text-blue-500 mt-2 text-sm hover:underline">
          {isSignUp ? "이미 계정이 있으신가요?" : "계정이 없으신가요?"}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;