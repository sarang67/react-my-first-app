import React, { useState } from "react";

const ErrorMessage = () => {
  return <span>ohhh !!! there is some error</span>;
};

const ErrorMessage2 = ({ isError }) => {
  return isError ? <span>ohhh !!! there is some error 2</span> : null;
};

// UltimateMachine component
const UltimateMachine = () => {
  const [showError, setShowError] = useState(false);

  const onClickHandler = () => {
    setShowError(!showError);
  };

  return (
    <section>
      <h1>The ultimate machine</h1>
      {showError && <ErrorMessage />}
      <ErrorMessage2 isError={showError} />

      <button onClick={onClickHandler}>Toggle Error</button>
    </section>
  );
};

export default UltimateMachine;

/*
//1) conditinally rendering component using if/else
// =============================================

import React, { useState } from "react";

const OnMessage = () => <p>The machine is on !!!</p>;
const OffMessage = () => <p>The machine is off !!!</p>;

// firt way to render component using if else
// onOff component
const OnOff = ({ isOn }) => {
  if (isOn) {
    return <OnMessage />;
  } else {
    return <OffMessage />;
  }
};

// UltimateMachine component
const UltimateMachine = () => {
  const [isOn, isOff] = useState(false);

  const onClickHandler = () => {
    isOff(!isOn);
  };

  // second  way to render component using if else
  let message;

  if (isOn) {
    message = <OnMessage />;
  } else {
    message = <OffMessage />;
  }

  // third  way to render component using if else

  const getMesage = () => {
    if (isOn) {
      return <OnMessage />;
    } else {
      return <OffMessage />;
    }
  };

  return (
    <section>
      <h1>The ultimate machine</h1>
      <OnOff isOn={isOn} />
      {message}
      {getMesage()}
      <button onClick={onClickHandler}>on/off</button>
    </section>
  );
};

export default UltimateMachine;

*/

/*
//2) conditinally render with terenary operator
//==================================


import React, { useState } from "react";

const OnMessage = () => <p>The machine is on !!!</p>;
const OffMessage = () => <p>The machine is off !!! </p>;

// UltimateMachine component
const UltimateMachine = () => {
  const [isOn, isOff] = useState(false);

  const onClickHandler = () => {
    isOff(!isOn);
  };

  return (
    <section>
      <h1>The ultimate machine</h1>
      {isOn ? <OnMessage /> : <OffMessage />}
      <button onClick={onClickHandler}>on/off</button>
    </section>
  );
};

export default UltimateMachine;

*/

/*
//3) conditinally render with and and or operator
//====================================
import React, { useState } from "react";

const ErrorMessage = () => {
  return <span>ohhh !!! there is some error</span>;
};

const ErrorMessage2 = ({ isError }) => {
  return isError ? <span>ohhh !!! there is some error 2</span> : null;
};

// UltimateMachine component
const UltimateMachine = () => {
  const [showError, setShowError] = useState(false);

  const onClickHandler = () => {
    setShowError(!showError);
  };

  return (
    <section>
      <h1>The ultimate machine</h1>
      {showError && <ErrorMessage />}
      <ErrorMessage2 isError={showError} />
      
      <button onClick={onClickHandler}>Toggle Error</button>
    </section>
  );
};

export default UltimateMachine;
*/
