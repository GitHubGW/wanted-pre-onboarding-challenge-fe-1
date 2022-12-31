export interface Todo {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetTodosResponse {
  data: Todo[];
}

export interface GetTodoByIdParams {
  id: string;
}

export interface GetTodoByIdResponse {
  data: Todo;
}
