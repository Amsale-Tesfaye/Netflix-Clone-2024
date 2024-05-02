import React,{useState, useEffect} from 'react';
// netflix Header.js  import React from 'react';
import "./Header.css";
import Netflixlogo from '../../Asset/Netflixname1.jpg';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


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
    < div className={`header_outer_container ${show && 'nav_black'}`}>
{/*   
      <div className="header_outer_container"> */}
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li><img src={Netflixlogo} alt="Netflix logo" width={"100"} />{" "}
              </li>
              <li> Netflix </li>
              <li>Home</li>
              <li>TVShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyLists</li>
              <li>Browse by Language</li>
            </ul>
           </div>

           <div className="header-right"> 
            <ul className="header-icon">
               <li><SearchIcon /></li> 
              <li><NotificationsNoneIcon /> </li>
              <li><AccountBoxIcon /> </li>
              <li><ArrowDropDownIcon /> 
              </li>
            </ul>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Header