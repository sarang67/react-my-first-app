import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [counterActive, setCounterActive] = useState(true);
  const value = useRef(0); // value {current:intialvalue }

  // value.curennt =  value.curennt + 1;
  console.log("value----> ", value);

  const onCLickHandler = () => {
    // setCounterActive(!counterActive);
    setCounterActive((oldValue) => !oldValue);
  };

  useEffect(() => {
    console.log("----effect function-----");
    let interval = null;
    if (counterActive) {
      interval = setInterval(() => {
        // setTime((oldvalue) => oldvalue + 1);
        value.current = value.current + 10;
        setTime(value.current);
      }, 1000);
    }

    return () => {
      console.log("----cleanup function-----");
      clearInterval(interval);
    };
  }, [counterActive]);

  return (
    <section>
      {value.current}
      <h1>Stop Counter</h1>
      <div>
        <span>{time}</span>
      </div>
      <button onClick={onCLickHandler}>start/stop</button>
    </section>
  );
};

export default StopWatch;

/*

stopwatch.js functionality with time depds , [time]
--------------------------------------------------
import React, { useEffect, useState } from "react";

const StopWatch = () => {
  console.log("================================");
  const [time, setTime] = useState(0);
  const [counterActive, setCounterActive] = useState(true);

  useEffect(() => {
    console.log("I am a effet function ");
    let interval = null;
    interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      console.log("I am a effet cleanup function function ");
      clearInterval(interval);
    };
  }, [time]);

  const onCLickHandler = () => {
    console.log("I am counteractive click handler");
    setCounterActive(!counterActive);
  };

  return (
    <section>
      <h1>Ultimate Stop Counter</h1>
      <div>
        <span>{time}</span>
      </div>

      <button onClick={onCLickHandler}>start/stop</button>
    </section>
  );
};

export default StopWatch;



*/

/*

stopwatch.js  with empty array depds [] , where closure issue exist , becaue our useEffect executiong  only once
-----------------------------------------------------------------------------------------------------------
try to explain in whiteboard why it is taking only freeze time value and how we can using fix by setState callback function	
	
import React, { useEffect, useState } from "react";

const StopWatch = () => {
  console.log("================================");
  const [time, setTime] = useState(0);
  const [counterActive, setCounterActive] = useState(true);

  useEffect(() => {
    console.log("I am a effet function ");
    let interval = null;
    interval = setInterval(
      
      () => {
      //setTime(time + 1);
      // issue fixed using callback function
      setTime((time) => time + 1);
      console.log("work");
    }
    
    , 1000);

    return () => {
      console.log("I am a effet cleanup function function ");
      clearInterval(interval);
    };
  }, []);

  const onCLickHandler = () => {
    console.log("I am counteractive click handler");
    setCounterActive(!counterActive);
  };

  return (
    <section>
      <h1>Ultimate Stop Counter</h1>
      <div>
        <span>{time}</span>
      </div>

      <button onClick={onCLickHandler}>start/stop</button>
    </section>
  );
};

export default StopWatch;

*/

/*
stopwatch.js  with on/off buttoon functinality
-----------------------------------------------------------------------------------------------------------	
	
import React, { useEffect, useState } from "react";

const StopWatch = () => {
  console.log("================================");
  const [time, setTime] = useState(0);
  const [counterActive, setCounterActive] = useState(true);

  useEffect(() => {
    console.log("I am a effet function ");
    let interval = null;

    if (counterActive) {
      interval = setInterval(() => {
        //setTime(time + 1);
        // issue fixed using callback function
        setTime((time) => time + 1);
        console.log("work");
      }, 1000);
    }

    return () => {
      console.log("I am a effet cleanup function function ");
      clearInterval(interval);
    };
  }, [counterActive]);

  const onCLickHandler = () => {
    console.log("I am counteractive click handler");
    //setCounterActive(!counterActive);
    setCounterActive((counterActive) => !counterActive);
  };

  return (
    <section>
      <h1>Ultimate Stop Counter</h1>
      <div>
        <span>{time}</span>
      </div>

      <button onClick={onCLickHandler}>start/stop</button>
    </section>
  );
};

export default StopWatch;

*/
