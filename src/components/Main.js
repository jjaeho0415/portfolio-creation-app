import React from "react";
import Title from "./Title";
import Introduce from "./Introduce";
import Project from "./Project";
import "../styles/Main.css";

const Main = () => {
  return (
    <div className='mainContainer'>
      <article className='article'>
        <Title />
      </article>
      <article className='article'>
        <Introduce />
      </article>
      <article className='article'>
        <Project />
      </article>
    </div>
  );
};

export default Main;
