import "./App.css";
import Home from "./pages/Home";
import UserContext from "./contexts/UserContext";

function App() {
  const userName = "정재호";
  return (
    <UserContext.Provider value={{ userName }}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;
