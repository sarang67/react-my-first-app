import React, { useEffect, useState } from "react";
import About from "./weather-report/about";
import Home from "./weather-report/home";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./weather-report/temprature.css";
import Footer from "./weather-report/footer";
import Reports from "./weather-report/reports";

const App = () => {
  return (
    <Router>
      <main>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/reports/:scale" component={Reports} />
        {/* <Reports scale="kelvin" /> */}
        {/* <Home />
        <About /> */}
      </main>
      <Footer />
    </Router>
  );
};

export default App;
