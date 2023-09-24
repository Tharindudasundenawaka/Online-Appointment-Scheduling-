import React, { useState, useEffect} from "react";
import Logo from "../images/logo-no-background.png";
import { NavLink} from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import "./NavBar.css";
import { Input } from "antd";

const { Search } = Input;

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  

 

  

  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const onFormSubmit = (value) => {
    console.log("Search term submitted:", value);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink
            exact
            to="/"
            onClick={(e) => {
              window.scrollTo(0, 0);
              setShowMenu(false);
            }}
          >
            <img src={Logo} alt="Paint Shop Logo" />
          </NavLink>
        </div>

        <button className="navbar-toggle" onClick={handleMenuClick}>
          <span className="navbar-toggle-icon"></span>
        </button>

            <h2 className="headtopic">forien Jobs</h2>

        {/* <div className="search-bar-container">
          <Search
            className="ant-input"
            placeholder="Search Jobs..."
            allowClear
            enterButton={<SearchOutlined />}
            size="large"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
            onSearch={onFormSubmit} 
          />
        </div> */}

        <ul className={showMenu ? "navbar-links active" : "navbar-links"}>
          <li>
            <NavLink
              exact
              to="/login"
              className="navbar-links li"
              activeClassName="active"
              onClick={() => {
                handleClick();
                closeMenu();
                setShowMenu(false);
              }}
            >
              Login
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/signup"
              className="navbar-links li"
              activeClassName="active"
              onClick={() => {
                handleClick();
                closeMenu();
                setShowMenu(false);
              }}
            >
              Signup
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
