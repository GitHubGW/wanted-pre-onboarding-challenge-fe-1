import useTodoQuery from "queries/useTodoQuery";
import Loading from "./Loading";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { useGetTodos } = useTodoQuery();
  const { data: todosData, isLoading } = useGetTodos();

  return (
    <div className="border-gray-200 rounded-2xl bg-white px-10 py-8 shadow-xl w-96">
      <h2 className="font-bold text-2xl text-center mb-5">Todo List ({todosData?.data.length || 0})</h2>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-col gap-2.5">
            {todosData?.data.map((item) => (
              <TodoItem key={item.id} id={item.id} title={item.title} createdAt={item.createdAt} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
