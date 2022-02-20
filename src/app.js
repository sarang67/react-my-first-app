// life cycle hooks

import React from "react";

const Child = () => {
  console.log("%c    Child: render start", "color: MediumSpringGreen");

  const [count, setCount] = React.useState(() => {
    console.log("%c    Child: useState(() => 0)", "color: tomato");
    return 0;
  });

  React.useEffect(() => {
    console.log("%c    Child: useEffect(() => {})", "color: LightCoral");
    return () => {
      console.log(
        "%c    Child: useEffect(() => {}) cleanup 🧹",
        "color: LightCoral"
      );
    };
  });

  React.useEffect(() => {
    console.log(
      "%c    Child: useEffect(() => {}, [])",
      "color: MediumTurquoise"
    );
    return () => {
      console.log(
        "%c    Child: useEffect(() => {}, []) cleanup 🧹",
        "color: MediumTurquoise"
      );
    };
  }, []);

  React.useEffect(() => {
    console.log("%c    Child: useEffect(() => {}, [count])", "color: HotPink");
    return () => {
      console.log(
        "%c    Child: useEffect(() => {}, [count]) cleanup 🧹",
        "color: HotPink"
      );
    };
  }, [count]);

  const element = (
    <button onClick={() => setCount((previousCount) => previousCount + 1)}>
      {count}
    </button>
  );

  console.log("%c    Child: render end", "color: MediumSpringGreen");

  return element;
};

const App = () => {
  console.log("%cApp: render start", "color: MediumSpringGreen");

  const [showChild, setShowChild] = React.useState(() => {
    console.log("%cApp: useState(() => false)", "color: tomato");
    return false;
  });

  React.useEffect(() => {
    console.log("%cApp: useEffect(() => {})", "color: LightCoral");
    return () => {
      console.log("%cApp: useEffect(() => {}) cleanup 🧹", "color: LightCoral");
    };
  });

  React.useEffect(() => {
    console.log("%cApp: useEffect(() => {}, [])", "color: MediumTurquoise");
    return () => {
      console.log(
        "%cApp: useEffect(() => {}, []) cleanup 🧹",
        "color: MediumTurquoise"
      );
    };
  }, []);

  React.useEffect(() => {
    console.log("%cApp: useEffect(() => {}, [showChild])", "color: HotPink");
    return () => {
      console.log(
        "%cApp: useEffect(() => {}, [showChild]) cleanup 🧹",
        "color: HotPink"
      );
    };
  }, [showChild]);

  const element = (
    <React.Fragment>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={(e) => setShowChild(e.target.checked)}
        />
        show child
      </label>
      <div
        style={{
          padding: 10,
          margin: 10,
          height: 50,
          width: 50,
          border: "solid",
        }}
      >
        {showChild ? <Child /> : null}
      </div>
    </React.Fragment>
  );

  console.log("%cApp: render end", "color: MediumSpringGreen");

  return element;
};

export default App;

// *********using refs property ******************
// import React, { useEffect, useRef } from "react";

// const Tilt = ({ children }) => {
//   const divRef = useRef();

//   useEffect(() => {
//     divRef.current.innerHTML += " skilledge";
//   }, []);

//   return (
//     <div ref={divRef}>
//       <div>{children}</div>
//     </div>
//   );
// };

// const App = () => (
//   <Tilt>
//     <div>I am from App div</div>
//   </Tilt>
// );

// export default App;

// import React, { useEffect } from "react";

// const UsernameForm = ({ onSubmitUsername }) => {
//   const usernameInputRef = React.useRef();

//   useEffect(() => {
//     console.log(usernameInputRef);
//   }, []);

//   function handleSubmit(event) {
//     event.preventDefault();
//     onSubmitUsername(usernameInputRef.current.value);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input id="usernameInput" type="text" ref={usernameInputRef} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// const App = () => {
//   const onSubmitUsername = (username) => alert(`You entered: ${username}`);
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />;
// };

// export default App;

// *********Prop Validation ******************

// import React from "react";
// import PropTypes from "prop-types";
// import * as everything from "prop-types";

// const Message = ({ subject, greeting }) => {
//   console.log(everything);
//   return (
//     <div>
//       {greeting} {subject}
//     </div>
//   );
// };

// // proptypes validation
// Message.propTypes = {
//   subject: PropTypes.string.isRequired,
//   greeting: PropTypes.string,
// };

// const App = () => {
//   return (
//     <React.Fragment>
//       <Message subject="world" greeting="hello" />
//       <Message subject="father" greeting="namastey" />
//     </React.Fragment>
//   );
// };

// export default App;

// **********style in React******************

// import React from "react";
// import "./border.css";

// const style1 = { fontStyle: "italic", backgroundColor: "pink" };
// const style2 = { fontStyle: "italic", backgroundColor: "yellow" };
// const style3 = { fontStyle: "italic", backgroundColor: "green" };

// const smallBox = (
//   <div className="box" style={style1}>
//     small lightblue box
//   </div>
// );
// const mediumBox = (
//   <div className="box" style={style2}>
//     medium pink box
//   </div>
// );
// const largeBox = (
//   <div
//     className="box"
//     style={{ fontStyle: "italic", backgroundColor: "green" }}
//   >
//     large orange box
//   </div>
// );

// const App = () => {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   );
// };

// export default App;

// ********************this is for your roting part************************
// import React, { useEffect, useState } from "react";
// import About from "./weather-report/about";
// import Home from "./weather-report/home";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import "./weather-report/temprature.css";
// import Footer from "./weather-report/footer";
// import Reports from "./weather-report/reports";

// const App = () => {
//   return (
//     <Router>
//       <main>
//         <Route path="/" component={Home} exact />
//         <Route path="/about" component={About} />
//         <Route path="/reports/:scale" component={Reports} />
//         {/* <Reports scale="kelvin" /> */}
//         {/* <Home />
//         <About /> */}
//       </main>
//       <Footer />
//     </Router>
//   );
// };

// export default App;
