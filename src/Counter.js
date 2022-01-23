import React, { useState, Fragment } from "react";
import InrectiveView from "./interctiveView";

// Counter Component
const Counter = () => {
  console.log(React);
  let [counter, setCounter] = React.useState(0); // [initalvalue , function]

  const onIncerementhandler = () => {
    // counter = counter + 1; //---> wrong
    setCounter(counter + 1); // --> right way react
  };

  return (
    <InrectiveView
      value={counter}
      onAction={onIncerementhandler}
      actionText="Increment"
    />
  );
};

export default Counter;

/*

// --> 1)  Adding the event handler to the element (for user interaction)
// --> 2)  Adding state with the useState hook



import React, { useState, Fragment } from "react";

const Counter = () => {
  console.log(React);
  let [counter, setCounter] = React.useState(0); // [initalvalue , function]

  const onClickHandler = () => {
    // counter = counter + 1; //---> wrong
    setCounter(counter + 1); // --> right way react
  };

  return (
    <React.Fragment>
      <p>{counter}</p>
      <button type="button" onClick={onClickHandler}>
        Increment
      </button>
    </React.Fragment>
  );
};

export default Counter;
*/

/*

// ---> 3) Oneway Data Flow in Components

import React, { useState, Fragment } from "react";

// CounterView Component
const CounterView = ({ counterValue, onIncrement }) => {
  return (
    <React.Fragment>
      <p>{counterValue}</p>
      <button type="button" onClick={onIncrement}>
        Increment
      </button>
    </React.Fragment>
  );
};


const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrementHandler = () => {
    setCount(count + 1);
  };

  return <CounterView counterValue={count} onIncrement={onIncrementHandler} />;
};

export default Counter;

*/
