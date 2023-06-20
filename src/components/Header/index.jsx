import React, { useState } from "react";
import Navbar from "../Navbar";

const Header = (props) => {
  const { props: propsValues, children } = props;

  const [state] = useState({
    video: "assets/videos/header.mp4",
    poster: "assets/images/poster.png",
    logo: "assets/images/Logo-2.png",
  });

  return (
    <div className="header">
      <div className="container pr">
        {/* <Navbar /> */}
        {/* <div className="header__logo">
          <img src={state.logo} alt="Logo" />
        </div> */}
      </div>
      <div className="header__video">
        <video
          src={state.video}
          autoPlay
          loop
          muted
          poster={state.poster}
        ></video>
      </div>

      <div className="header__contents">
        <div className="container">
          <div className="header__contents__text">
            <div className="header__contents__text__child">
              <h1 className="header__contents__text__child__h1">
                {propsValues.heading}
              </h1>

              <p className="header__contents__text__child__p">
                {propsValues.paragraph}
              </p>

              <div className="header__contents__text__child__link">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
