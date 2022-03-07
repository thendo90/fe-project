import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="navbar">
      <li>
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="link" to="/articles">
          Articles
        </Link>
      </li>
      <li>
        <Link className="link" to="/topics">
          Topics
        </Link>
      </li>
      <li>
        <Link className="link" to="/users">
          Users
        </Link>
      </li>
      <li className="li-myacc">
        <Link className="link" to="/myacc">
          myAcc
        </Link>
      </li>
    </ul>
  );
}
