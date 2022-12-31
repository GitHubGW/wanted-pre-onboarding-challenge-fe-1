import { useRouter } from "next/router";
import { useEffect, useCallback } from "react";
import { getLocalStorageItem, removeLocalStorageItem } from "utils/localStorage";

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
    <div>
      <h1>HomePage</h1>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default HomePage;
