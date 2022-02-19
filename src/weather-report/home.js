import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>Welcome to the weather report</h1>
      <nav>
        <ul>
          <li>
            <Link to="/reports/celcius">Weather reports in celcius </Link>
          </li>
          <li>
            <Link to="/reports/fahrenheit">Weather reports in fahrenheit </Link>
          </li>
          <li>
            <Link to="/reports/kelvin">Weather reports in kelvin</Link>
          </li>
        </ul>
      </nav>
      <p>
        Please select one of the options below to view the current wyather based
        on your choice of scale
      </p>
    </section>
  );
};

export default Home;
