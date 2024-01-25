import React from "react";
import Button from "./button/Button";
import SearchBar from "./searchbar/Search";
import Logo from "./logo/Logo";
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
