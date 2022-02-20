import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <a href="/about">About</a> */}
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
