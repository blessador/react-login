import React from "react";
import InfoPanel from "./components/InfoPanel";
import LoginForm from "./components/LoginForm";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <InfoPanel />
      <LoginForm />
    </div>
  );
};

export default App;