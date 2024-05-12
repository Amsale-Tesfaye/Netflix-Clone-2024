import React, { useState, useEffect } from "react";
import "./Header.css";
import Netflixlogo from "../../Asset/Netflixname1.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const Header = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <>
      <div className={`header_outer_container ${show && "nav_black"}`}>
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li>
                <img src={Netflixlogo} alt="Netflix logo" width={"100"} />{" "}
              </li>
              <div className="DropDown">
                {
                  <span>
                    Browse <ArrowDropDownIcon />
                  </span>
                }
              </div>
              <li>
                <a className="header-dropdown" href="/home">
                  Home
                </a>
              </li>
              <li>
                <a className="header-dropdown" href="/tvshows">
                  TVShows
                </a>
              </li>
              <li>
                {" "}
                <a className="header-dropdown" href="/movies">
                  Movies
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="header-dropdown" href="/Latest">
                  Latest
                </a>{" "}
              </li>

              <li>
                {" "}
                <a className="header-dropdown" href="/my list">
                  My List
                </a>{" "}
              </li>

              <li>
                <a className="header-dropdown" href="browse by Languages">
                  Browse by Languages
                </a>
                 
              </li>
            </ul>
          </div>

          <div className="header-right">
            <ul className="header-icon">
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />{" "}
              </li>
              <li>
                <AccountBoxIcon />{" "}
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;



