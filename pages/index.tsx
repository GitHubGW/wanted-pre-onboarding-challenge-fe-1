import MainLayout from "components/layouts/MainLayout";
import TodoDetail from "components/TodoDetail";
import TodoForm from "components/TodoForm";
import TodoList from "components/TodoList";
import { useRouter } from "next/router";
import { useEffect, useCallback } from "react";
import { getLocalStorageItem, removeLocalStorageItem } from "utils/localStorage";
import Link from "next/link";

const HomePage = () => {
  const router = useRouter();

  const handleLogout = useCallback(() => {
    removeLocalStorageItem();
    router.replace("/auth");
  }, [router]);

  useEffect(() => {
    const token = getLocalStorageItem();
    if (!token) {
      alert("유효하지 않은 토큰입니다.");
      router.replace("/auth");
    }
  }, [router]);

  return (
    <MainLayout pageTitle="Home">
      <div>
        <div className="flex flex-col gap-5 w-[800px] max-w-[800px]">
          <div className="flex gap-5 h-96 max-h-96">
            <TodoList />
            <TodoForm />
          </div>
          <TodoDetail />
        </div>
        <div className="fixed top-10 right-10">
          <Link href={"/"} className="inline-block mr-2 p-2.5 bg-lime-500 hover:bg-lime-600 rounded-md text-white">
            홈으로
          </Link>
          <button onClick={handleLogout} className="p-2.5 bg-blue-500 hover:bg-blue-600 rounded-md text-white">
            로그아웃
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
