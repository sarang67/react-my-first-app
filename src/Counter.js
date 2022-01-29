import React, { useState, Fragment, useEffect } from "react";

//8)  Handling basic side effects

/*
React.useEffect is a built-in hook that allows you to run some custom code after React renders (and re-renders) your component to the DOM. 
It accepts a callback function which React will call after the DOM has been updated:
  
  React.useEffect(() => {
    // your side-effect code here.
    // this is where you can make HTTP requests or interact with browser APIs.
  });
*/

const Counter = () => {
  let [counter, setCounter] = React.useState(0);
  let [internalCounter, seInternalCounter] = React.useState(0);

  useEffect(() => {
    // i am a effect function
    document.title = `Count ${counter} ${internalCounter} `;
    console.log("2 title changed");
  }, [counter]);

  const onCountClickHandler = () => {
    setCounter(counter + 1);
  };

  const onInternalCountertClickHandler = () => {
    seInternalCounter(internalCounter + 1);
  };

  console.log("1 rendering");

  return (
    <React.Fragment>
      <p>{counter}</p>
      <button type="button" onClick={onCountClickHandler}>
        Increment
      </button>
      <button type="button" onClick={onInternalCountertClickHandler}>
        Internal count increment
      </button>
    </React.Fragment>
  );
};

export default Counter;
