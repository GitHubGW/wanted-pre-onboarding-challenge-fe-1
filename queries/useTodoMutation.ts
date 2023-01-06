import QUERY_KEYS from "constants/queryKeys";
import TodoApi from "api/todo";
import { useQueryClient, useMutation } from "react-query";
import { CreateTodoParams, UpdateTodoParams, DeleteTodoParams } from "types/todo";

const useTodoMutation = () => {
  const queryClient = useQueryClient();

  const useCreateTodoMutation = () => {
    return useMutation({
      mutationFn: (params: CreateTodoParams) => TodoApi.createTodo({ title: params.title, content: params.content }),
      onSuccess: (response) => {
        console.log("useCreateTodo onSuccess", response);
        queryClient.invalidateQueries(QUERY_KEYS.TODO.GET_TODOS());
      },
      onError: (error) => {
        console.log("useCreateTodo onError", error);
      },
    });
  };

  const useUpdateTodoMutation = () => {
    return useMutation({
      mutationFn: (params: UpdateTodoParams) => TodoApi.updateTodo({ id: params.id, title: params.title, content: params.content }),
      onSuccess: (response) => {
        console.log("useUpdateTodo onSuccess", response);
        queryClient.invalidateQueries(QUERY_KEYS.TODO.GET_TODOS());
        queryClient.invalidateQueries(QUERY_KEYS.TODO.GET_TODO_BY_ID(response.data.id));
      },
      onError: (error) => {
        console.log("useUpdateTodo onError", error);
      },
    });
  };

  const useDeleteTodoMutation = () => {
    return useMutation({
      mutationFn: (params: DeleteTodoParams) => TodoApi.deleteTodo({ id: params.id }),
      onSuccess: (response) => {
        console.log("useDeleteTodo onSuccess", response);
        queryClient.invalidateQueries(QUERY_KEYS.TODO.GET_TODOS());
      },
      onError: (error) => {
        console.log("useDeleteTodo onError", error);
      },
    });
  };

  return { useCreateTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation };
};

export default useTodoMutation;
