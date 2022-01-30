import React, { useEffect, useState } from "react";
import "./machine.css";
import Counter from "./Counter";

const App = () => {
  const [show, SetShow] = useState(true);

  const handleonCLickHandler = () => {
    SetShow(!show);
  };

  return (
    <React.Fragment>
      {show && <Counter />}
      <br />
      <br />
      <button type="button" onClick={handleonCLickHandler}>
        show/hide
      </button>
    </React.Fragment>
  );
};

export default App;
