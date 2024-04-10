import React, { useEffect } from "react";

import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = ({ userName, setUserName, isLogin, setIsLogin }) => {
  const navigate = useNavigate();

  const handleSignInOutToggle = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };
  useEffect(() => {
    if (isLogin) {
      setUserName("정재호");
    } else {
      setUserName("");
    }
  });

  const goToPortfolio = () => {
    if (isLogin) {
      navigate("/PortfolioPage");
    } else {
      alert("로그인이 필요한 서비스입니다.");
    }
  };

  return (
    <div>
      <div>
        <div className='animationContainer'>{userName}</div>
        <div className='buttonContainer'>
          <div className='signInOutButtonContainer'>
            <button onClick={handleSignInOutToggle}>
              {isLogin ? "로그아웃" : "로그인"}
            </button>
          </div>
          <div className='signUpButtonContainer'>
            <button style={{ display: isLogin ? "none" : "block" }}>
              회원가입
            </button>
          </div>
          <div className='makePortfolioButtonContainer'>
            <button onClick={goToPortfolio}> 포트폴리오 작성하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
