import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center", backgroundColor: "gray" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;