import React, { useState, Fragment } from "react";
import InrectiveView from "./interctiveView";

const Random = () => {
  const [randomValue, setRandomValue] = React.useState(12);

  const onGenrateRandomValue = () => {
    setRandomValue(Math.random());
  };

  return (
    <InrectiveView
      value={randomValue}
      onAction={onGenrateRandomValue}
      actionText="Genrate random value"
    />
  );
};

export default Random;
