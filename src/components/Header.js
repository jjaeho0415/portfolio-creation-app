import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = ({ isLogin, setIsLogin }) => {
  const { userName } = useContext(UserContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
            <Link to='/myPages'>마이페이지</Link>
          </div>
        </div>
        <div className='headerCenter'>
          <Link to='/'>
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
