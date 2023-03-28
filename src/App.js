import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{time.toString()}</div>;
}

export default App;