import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const PortfolioPage = ({ userName, setUserName, isLogin, setIsLogin }) => {
  return (
    <>
      <Header
        userName={userName}
        setUserName={setUserName}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
      <Main isLogin={isLogin} />
      <Footer />
    </>
  );
};

export default PortfolioPage;
