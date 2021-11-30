import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>Free the badges</li>
            <li>Les problèmes arrivent</li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
