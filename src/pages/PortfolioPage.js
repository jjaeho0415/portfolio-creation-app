import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

const PortfolioPage = ({ userName }) => {
  // 로그인 상태를 로컬 스토리지에서 가져옴
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const storedIsLogin = localStorage.getItem("isLogin");
    if (storedIsLogin === "true") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <>
      <Header userName={userName} />
      <Main isLogin={isLogin} />
    </>
  );
};

export default PortfolioPage;
