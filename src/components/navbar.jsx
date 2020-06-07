import React from "react";

// Stateless function component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar Render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="/" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
