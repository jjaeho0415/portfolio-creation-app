import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = ({ userName }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const handleSignInOutToggle = () => {
    const updatedIsLogin = !isLogin;
    setIsLogin(updatedIsLogin);
    localStorage.setItem("isLogin", updatedIsLogin.toString());
  };

  useEffect(() => {
    const storedIsLogin = localStorage.getItem("isLogin");
    if (storedIsLogin === "true") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

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
        <div className='animationContainer'>
          <div>{isLogin ? `${userName}님 안녕하세요!` : "로그인하세요"}</div>
        </div>
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
