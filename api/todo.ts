import { GetTodosResponse, GetTodoByIdParams, GetTodoByIdResponse } from "types/todo";
import { getLocalStorageItem } from "utils/localStorage";
import { BASE_URL } from "./../constants/common";

const TodoApi = {
  getTodos: async () => {
    const response: GetTodosResponse = await (
      await fetch(`${BASE_URL}/todos`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: getLocalStorageItem() || "" },
      })
    ).json();
    return response;
  },

  getTodoById: async (params: GetTodoByIdParams) => {
    const response: GetTodoByIdResponse = await (
      await fetch(`${BASE_URL}/todos/${params.id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: getLocalStorageItem() || "" },
      })
    ).json();
    return response;
  },
};

export default TodoApi;
