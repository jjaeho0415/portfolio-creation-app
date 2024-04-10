import React, { useContext, useEffect, useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import IsLoginContext from "../contexts/IsLoginContext";

const Header = ({ userName, setUserName }) => {
  console.log("dhkTdma");
  const [isLogin, setIsLogin] = useContext(IsLoginContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (isLogin) {
      setUserName("정재호");
    }
  });

  const handleSignIn = () => {
    setIsLogin(true);
  };

  const handleSignOut = () => {
    setIsLogin(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <header className={isScrolled ? "header isScrolled" : "header"}>
      <div className='headerBar'>
        <div className='headerLeft'>
          <div
            className='myPage'
            style={{ display: isLogin ? "block" : "none" }}
          >
            <Link to='/'>Home</Link>
          </div>
        </div>
        <div className='headerCenter'>
          <Link to='/PortfolioPage'>
            {isLogin ? `${userName}의 포트폴리오` : "포트폴리오"}
          </Link>
        </div>
        <div className='headerRight'>
          {isLogin ? (
            <>
              <div className='signOut'>
                <span onClick={handleSignOut}>로그아웃</span>
              </div>
            </>
          ) : (
            <>
              <div className='signIn'>
                <span onClick={handleSignIn}>로그인</span>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
