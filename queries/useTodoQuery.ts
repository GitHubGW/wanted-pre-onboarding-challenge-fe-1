import TodoApi from "api/todo";
import QUERY_KEYS from "constants/queryKeys";
import { useQuery } from "react-query";
import { GetTodoByIdParams } from "types/todo";

const useTodoQuery = () => {
  const useGetTodos = () => {
    return useQuery({
      queryKey: QUERY_KEYS.TODO.GET_TODOS(),
      queryFn: () => TodoApi.getTodos(),
    });
  };

  const useGetTodoById = (params: GetTodoByIdParams) => {
    return useQuery({
      queryKey: QUERY_KEYS.TODO.GET_TODO_BY_ID(params.id),
      queryFn: () => TodoApi.getTodoById({ id: params.id }),
      enabled: params.id !== "undefined",
    });
  };

  return { useGetTodos, useGetTodoById };
};

export default useTodoQuery;
