import React from "react";
import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <ul className="bottombar">
      <li>
        <Link className="link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}
