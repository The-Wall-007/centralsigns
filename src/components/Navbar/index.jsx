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
          <Link>Service1</Link>
        </li>
        <li className="navigator__list__item">
          <Link>Service2</Link>
        </li>
        <li className="navigator__list__item">
          <Link>Service3</Link>
        </li>
        <li className="navigator__list__item">
          <Link>Service4</Link>
        </li>
        <li className="navigator__list__item">
          <Link>Service5</Link>
        </li>
      </ul>
      <div className="navigator__menuIcon" onClick={toggleMenu}>
        <div className="navigator__menuIcon__menuIconBar"></div>
        <div className="navigator__menuIcon__menuIconBar"></div>
        <div className="navigator__menuIcon__menuIconBar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
