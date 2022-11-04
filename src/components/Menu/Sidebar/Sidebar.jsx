import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";
import xicon from "../../../images/cancel.png";
import { MenuContext } from "react-flexible-sliding-menu";

function Sidebar() {
  const { closeMenu } = useContext(MenuContext);
  return (
    <div className="browse-sidebar">
      <div className="browse-sidebar-menu">
        <button className="close-btn" onClick={closeMenu}>
          <img alt="close button" srcSet={xicon} />
        </button>
        <ul className="sidebar">
          <li className="sidebar-menu">
            <Link to="/" className="menu-item">
              <span className="text">Home</span>
            </Link>
          </li>
          <div className="white-line"></div>
          <li className="sidebar-menu">
            <Link to="/Signin" className="menu-item">
              <span className="text">Sign In</span>
            </Link>
          </li>
          <li className="sidebar-menu">
            <Link to="/Signup" className="menu-item">
              <span className="text">Sign Up</span>
            </Link>
          </li>
          <div className="white-line"></div>
          <li className="sidebar-menu">
            <Link to="/NewToRent" className="menu-item">
              <span className="text">Movies</span>
            </Link>
          </li>
          <li className="sidebar-menu">
            <Link to="/SkyStorePremiere" className="menu-item">
              <span className="text">Sky Store Premiere</span>
            </Link>
          </li>
          <li className="sidebar-menu">
            <Link to="/StorePicks" className="menu-item">
              <span className="text">Spring Scale</span>
            </Link>
          </li>
          <li className="sidebar-menu">
            <Link to="/SkyVIPGift" className="menu-item">
              <span className="text">Sky VIP</span>
            </Link>
          </li>
          <li className="sidebar-menu">
            <Link to="/MostPopular" className="menu-item">
              <span className="text">TV</span>
            </Link>
          </li>
          <div className="white-line"></div>
          <li className="sidebar-menu">
            <Link to="/RedeemVoucher" className="menu-item">
              <span className="text">Redeem Voucher</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
