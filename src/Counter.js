import React, { useEffect, useState } from "react";

const subscribe = () => {
  console.log(
    "I am subscibed , liak attach event handler or called third party service etc etc"
  );
};

const unsubscibe = () => {
  console.log(
    "I am unsubscribed , like removed event handler , unsubscribe third party services etc etc"
  );
};

// Counter Component
const Counter = () => {
  console.log("===============================");
  let [counter, setCounter] = React.useState(0);

  /*
   cleanup with  no dependency array
   =========================================
  this will work always , whenever view rendered or re renderd 
    mount --> effect function will run
    update --> cleaun up will run , and  effect will again run
    when unmount --> cleanup will run 
  */

  useEffect(() => {
    subscribe();
    console.log(
      "--> 2: useEffcet  with no array , means every time render/rerender"
    );
    // cleanup function

    return () => {
      unsubscibe();
    };
  });

  /*
   cleanup with  filled dependency array [] :-
   ========================================
  this will work whenever dependency change , and first runc the cleanup ,and then run the effect
    mount --> effect function will run
    update --> cleaun up will run , and  effect will again run
    when unmount --> cleanup will run 
  */

  // useEffect(() => {
  //   subscribe();
  //   document.title = `Count is ${counter}`;
  //   console.log(
  //     "--> 3: useEffcet title changed , with array some deps , render , and rernder if deps changed"
  //   );
  //   // cleanup fucntion
  //   return () => {
  //     unsubscibe();
  //   };
  // }, [counter]);

  /*
   cleanup with empty dependency array []:-
   ============================================
  this will work in once in life of component 
    mount --> effect function will run
    update --> Nothing will happen
    when unmount --> cleanup fn will run 
  */

  // useEffect(() => {
  //   subscribe();
  //   console.log(
  //     "--> 4: useEffcet for empty array. means it will work only the time of renderin , once in life"
  //   );

  //   // cleanup function
  //   return () => {
  //     unsubscibe();
  //   };
  // }, []);

  const onCountClickHandler = () => {
    setCounter(counter + 1);
  };

  const onSaveClickHandler = () => {
    localStorage.setItem("ultimateCounte", counter);
  };

  console.log("--> 1: Rendering view");

  return (
    <React.Fragment>
      <p>{counter}</p>
      <button type="button" onClick={onCountClickHandler}>
        Increment
      </button>
      <button type="button" onClick={onSaveClickHandler}>
        Save Counter Value
      </button>
    </React.Fragment>
  );
};

export default Counter;

/*
1) understanding useEffect()
2) understanding rules of dependecy array or understanding shallow dependecny check

***varient of dependency array ****
Key Concept ---> Life cycle of Component (Mount , update (re render) . unmount)
3) using the empty dependency array in usEffect
4) UseEffect Cleanup function

*/

/*
// 1) understanding useEffect()

import React from "react";

const Counter = () => {
  console.log("===============================");
  let [counter, setCounter] = React.useState(0);
  let [internalCounter, seInternalCounter] = React.useState(0);

  React.useEffect(() => {
    document.title = `counter title ${counter}`;
    console.log("--> 2: useEffect counter title  called");
  }, [counter, internalCounter]);

  const onCountClickHandler = () => {
    setCounter(counter + 1);
  };

  const onInternalCountertClickHandler = () => {
    seInternalCounter(internalCounter + 1);
  };

  console.log("--> 1: Rendering view");
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

*/

/*
// 2) understanding rules of dependecy array or understanding shallow dependecny check

import React from "react";

const Counter = () => {
  console.log("===============================");
  let [counter, setCounter] = React.useState(0);
  let [internalCounter, seInternalCounter] = React.useState(0);
  let [obj, setObj] = React.useState({ name: "sarang jain" });

  React.useEffect(() => {
    document.title = `counter title ${counter} name${obj.name}`;
    console.log("--> 2: useEffect counter title  called");
  }, [counter, obj]);

  const onCountClickHandler = () => {
    // useEffect will fire because deps counter value gets changed
    setCounter(counter + 1);
    // useEffcet will not call , becaue you have passed same values .
    //setCounter(0);
  };

  const onInternalCountertClickHandler = () => {
    seInternalCounter(internalCounter + 1);
  };

  const onObjectChangedHandler = () => {
    // useEffect will call beause you are changing the refrence , setting a new object address
    //setObj({ name: "sarang jain" });

    // useEffect will not call because you have passed the same refrence
    obj.age = 32;
    obj.name = "om";
    //  setObj(obj);

    // then soultion is this will work now

    //const updatedObj = { ...obj };
    //setObj(updatedObj);
  };

  console.log("--> 1: Rendering view");
  return (
    <React.Fragment>
      <p>{counter}</p>
      <button type="button" onClick={onCountClickHandler}>
        Increment
      </button>

      <button type="button" onClick={onInternalCountertClickHandler}>
        Internal count increment
      </button>

      <button type="button" onClick={onObjectChangedHandler}>
        change Object
      </button>
    </React.Fragment>
  );
};

export default Counter;

// const x = { val: 10 };
// const y = x;

// console.log(x === y);

// x.val2 = 20;
// console.log(x);
// console.log(y);

// console.log(x === y);

*/

/*
// 3) using the empty dependency array in usEffect , example of localstorage

import React, { useEffect, useState } from "react";

const Counter = () => {
  console.log("===============================");
  let [counter, setCounter] = React.useState(0);

  useEffect(() => {
    console.log(
      "--> 2: useEffcet  with no array , means every time render/rerender"
    );
  });

  useEffect(() => {
    document.title = `Count is ${counter}`;
    console.log(
      "--> 3: useEffcet title changed , with array some deps , render , and rernder if deps changed"
    );
  }, [counter]);

  useEffect(() => {
    const saveCounterValue = localStorage.getItem("ultimateCounte");
    if (saveCounterValue) {
      setCounter(Number(saveCounterValue));
    }
    console.log(
      "--> 4: useEffcet for empty array. means it will work only the time of renderin , once in life"
    );
  }, []);

  const onCountClickHandler = () => {
    setCounter(counter + 1);
  };

  const onSaveClickHandler = () => {
    localStorage.setItem("ultimateCounte", counter);
  };

  console.log("--> 1: Rendering view");

  return (
    <React.Fragment>
      <p>{counter}</p>
      <button type="button" onClick={onCountClickHandler}>
        Increment
      </button>
      <button type="button" onClick={onSaveClickHandler}>
        Save Counter Value
      </button>
    </React.Fragment>
  );
};

export default Counter;
*/

/*
// 4) UseEffect Cleanup function

import React, { useEffect, useState } from "react";

const subscribe = () => {
  console.log(
    "I am subscibed , liak attach event handler or called third party service etc etc"
  );
};

const unsubscibe = () => {
  console.log(
    "I am unsubscribed , like removed event handler , unsubscribe third party services etc etc"
  );
};

// Counter Component
const Counter = () => {
  console.log("===============================");
  let [counter, setCounter] = React.useState(0);

    useEffect(() => {
      subscribe();
      console.log(
        "--> 2: useEffcet  with no array , means every time render/rerender"
      );
      // cleanup function
  
      return () => {
        unsubscibe();
      };
    });
  
 
  
    // useEffect(() => {
    //   subscribe();
    //   document.title = `Count is ${counter}`;
    //   console.log(
    //     "--> 3: useEffcet title changed , with array some deps , render , and rernder if deps changed"
    //   );
    //   // cleanup fucntion
    //   return () => {
    //     unsubscibe();
    //   };
    // }, [counter]);
  

  
    // useEffect(() => {
    //   subscribe();
    //   console.log(
    //     "--> 4: useEffcet for empty array. means it will work only the time of renderin , once in life"
    //   );
  
    //   // cleanup function
    //   return () => {
    //     unsubscibe();
    //   };
    // }, []);
  
    const onCountClickHandler = () => {
      setCounter(counter + 1);
    };
  
    const onSaveClickHandler = () => {
      localStorage.setItem("ultimateCounte", counter);
    };
  
    console.log("--> 1: Rendering view");
  
    return (
      <React.Fragment>
        <p>{counter}</p>
        <button type="button" onClick={onCountClickHandler}>
          Increment
        </button>
        <button type="button" onClick={onSaveClickHandler}>
          Save Counter Value
        </button>
      </React.Fragment>
    );
  };
  
  export default Counter;
*/
