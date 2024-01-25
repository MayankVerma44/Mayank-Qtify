import React from "react";
import Button from "./Button/Button";
import SearchBar from "./Searchbar/Search";
import Logo from "./Logo/Logo";
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
