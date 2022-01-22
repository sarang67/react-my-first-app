import React, { useState } from "react";

const Counter = () => {
  const onClickHandler = () => {
    console.log("button is pressed");
  };

  return (
    <React.Fragment>
      <p>0</p>
      <button type="button" onClick={onClickHandler}>
        Increment
      </button>
    </React.Fragment>
  );
};

export default Counter;
