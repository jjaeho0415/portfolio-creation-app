import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import MyPages from "./MyPages";
import AllProjects from "./AllProjects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Router>
      <div className='homePage'>
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />
        <Routes>
          <Route path='/' element={<Main isLogin={isLogin} />} />
          <Route path='/myPages' element={<MyPages isLogin={isLogin} />} />
          <Route
            path='/AllProjects'
            element={<AllProjects isLogin={isLogin} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Home;
