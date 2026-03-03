import React from "react";

const InfoPanel: React.FC = () => {
  return (
    <div className="info-panel" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img 
        src="/assets/login-illustration-svg.png" 
        alt="Authentication Illustration" 
        style={{ maxWidth: "100%", height: "auto" }} 
      />
    </div>
  );
};

export default InfoPanel;