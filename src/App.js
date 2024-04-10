import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              userName={userName}
              setUserName={setUserName}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
          }
        />
        <Route
          path='/PortfolioPage'
          element={
            <PortfolioPage
              userName={userName}
              setUserName={setUserName}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
