import React from "react";

import { Link } from "react-router-dom";

import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          ​ <Link to="/login"> Login</Link>​
        </li>
        <li>
          ​ <Link to="/signup"> Sign Up</Link>​
        </li>
        <li>
          ​ <Link to="/createprofile"> Create Profile</Link>​
        </li>
        <li>
          ​ <Link to="/myprofile"> My Profile </Link>​
        </li>
      </ul>
    </div>
  );
}
