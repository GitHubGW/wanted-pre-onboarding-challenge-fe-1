import { TOKEN } from "constants/auth";

export const getLocalStorageItem = () => {
  const token = localStorage.getItem(TOKEN);
  return token;
};

export const setLocalStorageItem = (token: string) => {
  localStorage.setItem(TOKEN, token);
};

export const removeLocalStorageItem = () => {
  localStorage.removeItem(TOKEN);
};
