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

export interface CreateTodoParams {
  title: string;
  content: string;
}

export interface CreateTodoResponse {
  data: Todo;
}

export interface UpdateTodoParams {
  id: string;
  title: string;
  content: string;
}

export interface UpdateTodoResponse {
  data: Todo;
}

export interface DeleteTodoParams {
  id: string;
}

export interface DeleteTodoResponse {
  data: null;
}
