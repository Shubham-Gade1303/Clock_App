import React, {useState,useEffect}  from "react";

const DigitalClock = () =>{
  const [Time, setTime] = useState(() => new Date().toLocaleTimeString());


  useEffect(() =>{
    const timeId = setInterval(() =>{
      setTime(new Date().toLocaleTimeString());

    }, 1000);

    return () => clearInterval(timeId);

  },[]);

  const formatTime = (time) => {
    return time;
  }


  const clockStyle ={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100vh',
    backgroundColor:'#1a1a1a',
    color:'#00ffcc',
    fontFamily:'monospace',
    fontSize: '4rem',
    letterSpacing: '2px'
  };

  return (
    <div style={clockStyle}>
      {formatTime(Time)}
    </div>
  );

};
export default DigitalClock;