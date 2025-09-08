import React from "react";
import { Log } from "../logger";

const Demo = () => {
  const handleDebug = () => {
    Log("DemoComponent", "DEBUG", "DemoPackage", "This is a debug log");
  };

  return (
    <div>
      <h2>Demo Component</h2>
      <button onClick={handleDebug}>Log Debug Message</button>
    </div>
  );
};

export default Demo;
