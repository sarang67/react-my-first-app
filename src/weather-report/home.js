import React from "react";
import { Link } from "react-router-dom";
import Section from "./section";

const Home = ({ history, location, match }) => {
  return (
    <Section headingText="Welcome to the weather report">
      {/* <h1>Welcome to the weather report</h1> */}

      <p>
        Please select one of the options below to view the current wyather based
        on your choice of scale
      </p>
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
    </Section>
  );
};

export default Home;
