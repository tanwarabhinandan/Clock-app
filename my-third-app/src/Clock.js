import React, { useState, useEffect } from 'react';
import './clock.css';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getRotationStyle = (value, maxValue) => {
    const rotation = (value / maxValue) * 360;
    return {
      transform: `rotate(${rotation}deg)`,
    };
  };

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="hand hour-hand" style={getRotationStyle(hours, 12)}></div>
        <div className="hand minute-hand" style={getRotationStyle(minutes, 60)}></div>
        <div className="hand second-hand" style={getRotationStyle(seconds, 60)}></div>
        <div className="center-dot"></div>
      </div>
    </div>
  );
}

export default Clock;
