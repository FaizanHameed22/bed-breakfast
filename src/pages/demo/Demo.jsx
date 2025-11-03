import React from "react";
import "./Demo.css";

const Demo = () => {
  return (
    <div className="demo-container">
      <h1>Welcome to the Demo Page</h1>
      <p>
        This is a sample component to test layout, styles, or functionality in your React app.
      </p>

      <button
        className="demo-btn"
        onClick={() => alert("Button clicked successfully! 🎉")}
      >
        Click Me
      </button>
    </div>
  );
};

export default Demo;
