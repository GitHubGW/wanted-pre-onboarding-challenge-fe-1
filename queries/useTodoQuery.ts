import TodoApi from "api/todo";
import QUERY_KEYS from "constants/queryKeys";
import { useQuery } from "react-query";
import { GetTodoByIdParams } from "types/todo";

const useTodoQuery = () => {
  const useGetTodos = () => {
    const result = useQuery({
      queryKey: QUERY_KEYS.TODO.GET_TODOS(),
      queryFn: () => TodoApi.getTodos(),
    });
    return result;
  };

  const useGetTodoById = (params: GetTodoByIdParams) => {
    const result = useQuery({
      queryKey: QUERY_KEYS.TODO.GET_TODO_BY_ID(params.id),
      queryFn: () => TodoApi.getTodoById({ id: params.id }),
    });
    return result;
  };

  return {
    useGetTodos,
    useGetTodoById,
  };
};

export default useTodoQuery;
