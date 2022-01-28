import React, { useState } from "react";
import InrectiveView from "./interctiveView";

const Decrement = () => {
  // 3 --> function recall
  const [decrement, setDecrement] = useState(10); // 1-->10
  //4 --> decremet ---> 9

  const onDecrementHandler = () => {
    setDecrement(decrement - 1); // 2--> 9
  };

  return (
    <InrectiveView
      value={decrement}
      onAction={onDecrementHandler}
      actionText="please Decrement number"
    />
  );
};

export default Decrement;
