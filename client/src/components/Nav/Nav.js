import React from "react";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          NYT Scraper
        </a>
        <ul className="nav navbar-nav">
        <li>
         
         Main
        </li>
        <li>
       
        
         Results
        </li>
   <li>
          Saved
        </li>
      </ul>
         
      </div>
    </div>
  </nav>;

export default Nav;
