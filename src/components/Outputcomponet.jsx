import { useState } from "react";
import { fetchOutput } from "../api/api.js";
export default function OutputComponent({ value, language }) {
  const [output, setOutput] = useState(null);
  const [showOutput, setShowOutput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleOutput = async () => {
    setIsLoading(true);
    try {
      const result = await fetchOutput(language, value);
      setOutput(result);
      setShowOutput(true);
    } catch (error) {
      console.error("Error fetching output:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="output-section">
      <h2>Output</h2>
      <button className="run-button" onClick={handleOutput}>
        {!isLoading ? (
          "Run Code"
        ) : (
          <div className="loading-output">
            <span>Running</span>
            <span className="loading-dot">.</span>
            <span className="loading-dot">.</span>
            <span className="loading-dot">.</span>
          </div>
        )}
      </button>
      {showOutput && (
        <pre className="output-display">
          <code>{output.run.output || "No output yet"}</code>
        </pre>
      )}
    </div>
  );
}
