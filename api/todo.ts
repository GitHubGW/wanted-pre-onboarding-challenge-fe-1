import {
  GetTodosResponse,
  GetTodoByIdParams,
  GetTodoByIdResponse,
  CreateTodoParams,
  CreateTodoResponse,
  DeleteTodoParams,
  DeleteTodoResponse,
  UpdateTodoParams,
  UpdateTodoResponse,
} from "types/todo";
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

  createTodo: async (params: CreateTodoParams) => {
    const response: CreateTodoResponse = await (
      await fetch(`${BASE_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: getLocalStorageItem() || "" },
        body: JSON.stringify(params),
      })
    ).json();
    return response;
  },

  updateTodo: async (params: UpdateTodoParams) => {
    const response: UpdateTodoResponse = await (
      await fetch(`${BASE_URL}/todos/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: getLocalStorageItem() || "" },
        body: JSON.stringify(params),
      })
    ).json();
    return response;
  },

  deleteTodo: async (params: DeleteTodoParams) => {
    const response: DeleteTodoResponse = await (
      await fetch(`${BASE_URL}/todos/${params.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization: getLocalStorageItem() || "" },
      })
    ).json();
    return response;
  },
};

export default TodoApi;
