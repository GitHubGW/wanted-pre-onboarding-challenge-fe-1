import useTodoMutation from "queries/useTodoMutation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

interface TodoFormProps {
  isUpdating?: boolean;
  id?: string;
  title?: string;
  content?: string;
  handleToggleTodo?: () => void;
}

interface FormData {
  title: string;
  content: string;
}

const TodoForm = ({ isUpdating, id, title, content, handleToggleTodo }: TodoFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormData>({ mode: "onChange", defaultValues: { title: title || "", content: content || "" } });
  const { useCreateTodoMutation, useUpdateTodoMutation } = useTodoMutation();
  const { mutate: createTodoMutate } = useCreateTodoMutation();
  const { mutate: updateTodoMutate } = useUpdateTodoMutation();

  const onValid = useCallback(
    (formData: FormData) => {
      if (isUpdating && id && handleToggleTodo) {
        handleToggleTodo();
        reset();
        updateTodoMutate({ id, title: formData.title, content: formData.content });
      } else {
        createTodoMutate({ title: formData.title, content: formData.content });
        reset();
      }
    },
    [updateTodoMutate, createTodoMutate, handleToggleTodo, isUpdating, id, reset]
  );

  return (
    <form onSubmit={handleSubmit(onValid)} className="border-gray-200 rounded-2xl bg-white px-10 py-8 shadow-xl w-full">
      <h2 className="font-bold text-2xl text-center">{isUpdating ? "Update Todo" : "Add Todo"}</h2>
      <div className="mt-6 flex flex-col gap-3">
        <label htmlFor="titleInput">
          <div className="text-sm mb-1">제목</div>
          <input {...register("title", { required: "제목은 필수입니다." })} required type="text" id="titleInput" className="border border-gray-300 w-full rounded-md p-1.5" />
        </label>
        <label htmlFor="contentInput">
          <div className="text-sm mb-1">내용</div>
          <input {...register("content", { required: "내용은 필수입니다." })} required type="text" id="contentInput" className="border border-gray-300 w-full rounded-md p-1.5" />
        </label>
      </div>
      {isUpdating ? (
        <div className="flex gap-1.5 mt-6">
          <button disabled={!isValid} type="submit" className={`${isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"} flex-1 p-3 rounded-md text-white text-sm `}>
            할일 수정
          </button>
          <button onClick={handleToggleTodo} type="button" className="bg-red-400 hover:bg-red-500 flex-1 p-3 rounded-md text-white text-sm">
            취소
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-1.5 mt-6">
          <button disabled={!isValid} type="submit" className={`${isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"} p-3 rounded-md text-white text-sm `}>
            할일 추가
          </button>
        </div>
      )}
    </form>
  );
};

export default TodoForm;
