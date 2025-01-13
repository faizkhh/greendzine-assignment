import React, { useEffect, useState } from "react";

const Countdown = ({setTimeOut}) => {
  const minutes = 0;
  const seconds = 30;
  const [time, setTime] = useState(minutes * 60 + seconds);

  

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if(prevTime === 1){
            clearInterval(timer);
            setTimeOut(true);
        }
        return prevTime > 0 ? prevTime - 1 : 0;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [setTimeOut]);

  const formatTime = (time)=>{
    const min = Math.floor(time/60);
    const sec = time % 60;
    return `${String(min).padStart(1, "0")}:${String(sec).padStart(2, "0")}`
  }

  return <div>{formatTime(time)} sec</div>;
};

export default Countdown;
