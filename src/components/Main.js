import React from "react";
import Title from "./Title";
import Introduce from "./Introduce";
import Project from "./Project";
import "../styles/Main.css"; // Main 컴포넌트에 대한 CSS 파일 import

const Main = ({ isLogin }) => {
  return (
    <div className='mainContainer'>
      <article className='article'>
        <Title isLogin={isLogin} />
      </article>
      <article className='article'>
        <Introduce isLogin={isLogin} />
      </article>
      <article className='article'>
        <Project isLogin={isLogin} />
      </article>
    </div>
  );
};

export default Main;
