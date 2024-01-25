import { CiSearch } from "react-icons/ci";
import "./Search.css";

const SearchBar = () => {
  return (
    <>
      <div className="wrapper">
        <input className="search" placeholder="Search a album of your choice" />
        <button className="search-btn">
          <CiSearch />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
