import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  const [userName, setUserName] = useState("정재호");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "red",
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home userName={userName} setUserName={setUserName} />}
          />
          <Route
            path='/PortfolioPage'
            element={<PortfolioPage userName={userName} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
