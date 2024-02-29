import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { FaClockRotateLeft } from "react-icons/fa6";

const Clock = () => {
  console.log("calling");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-purple-800 hover:text-purple-700">
        <FaClockRotateLeft /> {format(currentTime, "hh:mm:ss a")}
      </div>
    </div>
  );
};

export default Clock;
