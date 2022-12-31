import { useRouter } from "next/router";
import { useEffect } from "react";
import { getLocalStorageItem } from "utils/localStorage";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = getLocalStorageItem();
    if (!token) {
      alert("유효하지 않은 토큰입니다.");
      router.replace("/auth");
    }
  }, [router]);

  return <div>HomePage</div>;
};

export default HomePage;
