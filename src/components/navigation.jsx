import React from "react";

// Navigation data extracted for easy modification and scaling
const NAV_LINKS = [
  { href: "#features", text: "BUILD A PC" },
  // Add other navigation items here if your app grows
];

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {/* Removed unnecessary whitespace and cleaned up span tags */}
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            PCRealm
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* Map over the NAV_LINKS array instead of hardcoding list items */}
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="page-scroll">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};