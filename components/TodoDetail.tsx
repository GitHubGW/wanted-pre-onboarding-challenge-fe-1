import { useRouter } from "next/router";
import useTodoQuery from "queries/useTodoQuery";
import { useCallback, useState } from "react";
import TodoDetailItem from "./TodoDetailItem";
import TodoForm from "./TodoForm";

const TodoDetail = () => {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);
  const { useGetTodoById } = useTodoQuery();
  const { data: todoData } = useGetTodoById({ id: String(router.query.id) });

  const handleToggleTodo = useCallback(() => {
    setIsUpdating((prev) => !prev);
  }, [setIsUpdating]);

  return (
    <div className="border-gray-200 rounded-2xl bg-white px-10 py-8 shadow-xl w-full h-96 max-h-96">
      {todoData?.data && isUpdating ? (
        <TodoForm isUpdating={isUpdating} id={todoData.data.id} title={todoData.data.title} content={todoData.data.content} handleToggleTodo={handleToggleTodo} />
      ) : (
        <div>
          <div className="relative">
            <h2 className="font-bold text-2xl text-center">Todo Detail</h2>
            {todoData?.data && !isUpdating && (
              <button onClick={handleToggleTodo} type="button" className="text-sm absolute top-0 right-0 p-2.5 bg-blue-500 hover:bg-blue-600 rounded-md text-white">
                수정하기
              </button>
            )}
          </div>
          {todoData?.data && !isUpdating && (
            <TodoDetailItem title={todoData.data.title} content={todoData.data.content} createdAt={todoData.data.createdAt} updatedAt={todoData.data.updatedAt} />
          )}
        </div>
      )}
    </div>
  );
};

export default TodoDetail;
