import { useState, useRef } from "react";
import "./App.css";
export default function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); // Ref to store the interval ID

  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
    setIsRunning(false);
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <span>{Math.trunc(timer / 60)} mins </span>
      <span>{timer % 60} secs</span>
      <div>
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
