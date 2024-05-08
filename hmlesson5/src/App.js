import React from "react";
import "./App.css";
import ThemeSwither from "./components/ThemeSwither";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme); 

  return (
    <div className={`App ${theme}-theme`}>
      {" "}
      <header className="App-header">
        <ThemeSwither />
      </header>
    </div>
  );
}

export default App;