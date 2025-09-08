import React, { useState } from "react";
import { Log } from "./logger";

function App() {
  const [status, setStatus] = useState("");

  const sendLog = async (stack, level, pkg, message) => {
    try {
      await Log(stack, level, pkg, message);
      setStatus("✅ Log sent successfully!");
    } catch (error) {
      setStatus("❌ Failed to send log.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frontend Logging Middleware Demo</h1>
      <button
        style={{ marginRight: "10px" }}
        onClick={() =>
          sendLog("Frontend", "INFO", "AuthModule", "User login successful")
        }
      >
        Log Success
      </button>
      <button
        onClick={() =>
          sendLog(
            "Frontend",
            "ERROR",
            "PaymentModule",
            "Payment failed due to timeout"
          )
        }
      >
        Log Error
      </button>
      <p style={{ marginTop: "20px", fontWeight: "bold" }}>{status}</p>
    </div>
  );
}

export default App;
