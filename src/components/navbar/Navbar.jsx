import React from "react";
import Button from "./button/Button.jsx";
import Logo from "./logo/Logo.jsx";
import SearchBar from "./searchbar/Search.jsx";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <SearchBar />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default NavBar;
