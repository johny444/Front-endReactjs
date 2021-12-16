import React from "react";
import "./Topbar.css";
import spy from "./spy.png";
import email from "./email.png";



export default function Topbar({ menuOpen, setMenuOpen }) {
  
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="topbar-wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            DevLHS.
          </a>
          <div className="itemContainer">
            <img src={spy} className="icon" />
            <span>+84834284818</span>
          </div>
          <div className="itemContainer">
            <img src={email} className="icon" />
            <span>Kiattysack.3098@gmail.com</span>
          </div>
        </div>
        <div className="search">
           <div className="searchInput">
             <input type="text" placeholder="Enter a Tìm kiếm..."/>
             <div className="searchIcon">
             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
             </div>
             </div>
           <div className="dataResult"></div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
