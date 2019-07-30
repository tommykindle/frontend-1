import React from "react";
import "./App.css";
import LoginForm from "./LoginForm/LoginForm";
import CurrentPosistion from "./CurrentPosistion";

function App() {
  return (
    <div className="App">
      <LoginForm />
      <CurrentPosistion />
    </div>
  );
}

export default App;
