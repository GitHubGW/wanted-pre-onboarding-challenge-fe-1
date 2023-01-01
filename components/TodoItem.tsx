import Link from "next/link";
import useTodoMutate from "queries/useTodoMutate";
import { useCallback } from "react";

interface TodoItemProps {
  id: string;
  title: string;
  createdAt: string;
}

const TodoItem = ({ id, title, createdAt }: TodoItemProps) => {
  const { useDeleteTodo } = useTodoMutate();
  const { mutate: deleteMutate } = useDeleteTodo();

  const handleDelete = useCallback(() => {
    deleteMutate({ id });
  }, [deleteMutate, id]);

  return (
    <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg p-2.5 flex">
      <Link href={`/todos/${id}`} className="w-full">
        <h3 className="font-bold text-lg">{`${title.length < 20 ? title : `${title.substring(0, 20)}...`}`}</h3>
        <span className="text-xs text-gray-400">{new Date(createdAt).toLocaleString()}</span>
      </Link>
      <div className="flex items-center gap-3">
        <button onClick={handleDelete} className="text-2xl text-gray-400">
          ❎
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
