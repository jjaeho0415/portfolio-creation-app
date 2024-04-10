import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IsLoginContext from "./contexts/IsLoginContext";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <BrowserRouter>
      <IsLoginContext.Provider value={{ isLogin, setIsLogin }}>
        <Routes>
          <Route
            path='/'
            element={<Home userName={userName} setUserName={setUserName} />}
          />
          <Route
            path='/PortfolioPage'
            element={
              <PortfolioPage userName={userName} setUserName={setUserName} />
            }
          />
        </Routes>
      </IsLoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
