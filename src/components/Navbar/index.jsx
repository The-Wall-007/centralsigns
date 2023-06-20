import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [state] = useState({
    video: "assets/videos/header.mp4",
    poster: "assets/images/poster.png",
    logo: "assets/images/Logo-2.png",
  });

  const menuOpenListing = menuOpen ? "navigator__list__active" : "";
  const menuOpenHeader = menuOpen ? "navigator__menuOpen" : "";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navigator ${menuOpenHeader}`}>
      <div className="navigator__logo">
        <img src={state.logo} alt="Logo" />
      </div>
      <ul className={`navigator__list ${menuOpenListing}`}>
        <li className="navigator__list__item">
          <Link>SERVICE1</Link>
        </li>
        <li className="navigator__list__item">
          <Link>SERVICE2</Link>
        </li>
        <li className="navigator__list__item">
          <Link>SERVICE3</Link>
        </li>
        <li className="navigator__list__item">
          <Link>SERVICE4</Link>
        </li>
        <li className="navigator__list__item">
          <Link>SERVICE5</Link>
        </li>
      </ul>

      <div
        className={
          menuOpen ? "navigator__menuIcon__active" : "navigator__menuIcon"
        }
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
