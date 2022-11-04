import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "react-flexible-sliding-menu";
import arrowdownbtn from "../../../images/arrow-down.png";
import hamburger from "../../../images/hamburger.png";
import searchdark from "../../../images/search-dark.png";
import searchlight from "../../../images/search-light.png";
import "./Nav.css";

export default function Nav() {
  const { toggleMenu } = useContext(MenuContext);
  const [hide, setHide] = useState(false);

  const handleOnClick = () => {
    if (hide == false) {
      setHide(true);
    } else {
      setHide(false);
    }
  };

  return (
    <header>
      <div className="HeaderMain">
        <div className="header-bgimg">
          <div className="header-container">
            <div className="header-top">
              <div className="header-top-left hidden-1">
                <button className="browsebtn" onClick={toggleMenu}>
                  <img srcSet={hamburger} alt="" />
                  <span className="text hidden-3">Browse</span>
                </button>
              </div>
              <Link to="/" className="header-top-center">
                <img
                  srcSet="https://www.skystore.com/versions/6.3.0/assets/img/sky-logo@2x.png"
                  alt="logo"
                  href="/"
                />
              </Link>
              <div className="header-top-right">
                <nav className="nav-susi hidden-2">
                  <ul className="nav-susi-menu">
                    <li className="menu-item">
                      <Link to="/Signin" className="item-content">
                        <span className="text">Sign In</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/Signup" className="item-content">
                        <span className="text">Sign Up</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="searchbar hidden-2">
                  <section className="searchbar-container">
                    <div className="searchbar-input">
                      <input
                        type="search"
                        className="searchbar-input-content"
                        placeholder="Search for title, actors, directors"
                      />
                      <img alt="" srcSet={searchdark} />
                    </div>
                  </section>
                </div>
                <div className="menu-icons">
                  <button className="mobileToggle" onClick={handleOnClick}>
                    {!hide ? (
                      <span className="mobileSearchIcon">
                        <img
                          className="search-icon hidden-1"
                          srcSet={searchlight}
                          alt=""
                        />
                      </span>
                    ) : null}
                    {hide ? <span className="textSearch">Cancel</span> : null}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="header-bottom">
            <nav className="header-bottom-navbar">
              <ul className="header-bottom-menu">
                <li className="header-bottom-menu-item">
                  <Link to="/" className="menu-item">
                    <span className="text1">Home</span>
                  </Link>{" "}
                </li>
                <li className="header-bottom-menu-item">
                  <Link to="/NewToRent" className="menu-item">
                    <span className="text1">Movies</span>
                    <img className="arrowdown" srcSet={arrowdownbtn} alt="" />
                  </Link>{" "}
                  <ul className="inner-menu">
                    <li className="inner-menu-item">
                      <Link to="/NewToRent" className="menu-item">
                        <span className="text">New to Rent</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/NewToBuy" className="menu-item">
                        <span className="text">New to Buy</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/PreOrder" className="menu-item">
                        <span className="text">Pre-Order</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/MovieBoxSets" className="menu-item">
                        <span className="text">Movie Box Sets</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/BondCollection" className="menu-item">
                        <span className="text">Bond Collection</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/OfficialFilmCharts" className="menu-item">
                        <span className="text">Official Film Chart</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/Browse" className="menu-item">
                        <span className="text">Browse</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/AtoZ" className="menu-item">
                        <span className="text">A to Z</span>
                      </Link>{" "}
                    </li>
                  </ul>
                </li>
                <li className="header-bottom-menu-item">
                  <Link to="/SkyStorePremiere" className="menu-item">
                    <span className="text1">Sky Store Premiere</span>
                  </Link>{" "}
                </li>
                <li className="header-bottom-menu-item">
                  <Link to="/StorePicks" className="menu-item">
                    <span className="text1">Spring Sale</span>
                    <img className="arrowdown" srcSet={arrowdownbtn} alt="" />
                  </Link>{" "}
                  <ul className="inner-menu">
                    <li className="inner-menu-item">
                      <Link to="/StorePicks" className="menu-items">
                        <span className="text">Store Picks</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/UnderE3" className="menu-items">
                        <span className="text">Under £3</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/UnderE4" className="menu-items">
                        <span className="text">Under £4</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/UnderE5" className="menu-items">
                        <span className="text">Under £5</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/MovieBoxSets" className="menu-items">
                        <span className="text">Movie Box Sets</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/TVBoxSets" className="menu-items">
                        <span className="text">TV Boxsets</span>
                      </Link>{" "}
                    </li>
                  </ul>
                </li>
                <li className="header-bottom-menu-item">
                  <Link to="/SkyVIPGift" className="menu-item">
                    <span className="text1">Sky VIP</span>
                    <img className="arrowdown" srcSet={arrowdownbtn} alt="" />
                  </Link>{" "}
                  <ul className="inner-menu">
                    <li className="inner-menu-item">
                      <Link to="/SkyVIPGift" className="menu-items">
                        <span className="text">Sky VIP Gift</span>
                      </Link>{" "}
                    </li>
                  </ul>
                </li>
                <li className="header-bottom-menu-item">
                  <Link to="/MostPopular" className="menu-item">
                    <span className="text1">TV</span>
                    <img className="arrowdown" srcSet={arrowdownbtn} alt="" />
                  </Link>{" "}
                  <ul className="inner-menu">
                    <li className="inner-menu-item">
                      <Link to="/MostPopular" className="menu-items">
                        <span className="text">Most Popular</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/NewToStore" className="menu-items">
                        <span className="text">New To Store</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/Drama" className="menu-items">
                        <span className="text">Drama</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/Comedy" className="menu-items">
                        <span className="text">Comedy</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/Kids" className="menu-items">
                        <span className="text">Kids</span>
                      </Link>{" "}
                    </li>
                    <li className="inner-menu-item">
                      <Link to="/All" className="menu-items">
                        <span className="text">All</span>
                      </Link>{" "}
                    </li>
                  </ul>
                </li>
                <li className="header-bottom-menu-item1  menu-item-last">
                  <Link to="/RedeemVoucher" className="menu-item">
                    <span className="text2">Redeem Voucher</span>
                  </Link>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {hide ? (
          <input
            type="search"
            placeholder=" Search for title, actors, directors"
            name=""
            className="searchinputMobile"
          />
        ) : null}
      </div>
    </header>
  );
}
