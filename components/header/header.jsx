import Head from "next/head";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Head>
       
      </Head>
      {/* <div className="header-image-cont">
        <div className="header-titles">
          <span className="headerTitleOne">Cybermatta Africa</span>
          <span className="headerTitleTwo">One Stop Tech News Blog</span>
        </div>
        <img
          src="/assets/wallpaper-one.jpeg"
          alt="Cybermatta Header Image"
          className="header-img"
        />
      </div> */}
      <div className="header-events-cont">
        <div className="header-events-title">
          <span>Upcoming Tech Events</span>
        </div>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm-12 col-md-4 header-event-col-1">
              <div className="header-event-details">
                <span className="header-event-date">5th August - Cybersecurity</span>
                <span className="header-event-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 header-event-col-2">
              <div className="header-event-details">
                <span className="header-event-date">6th Sept - Web Development</span>
                <span className="header-event-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 header-event-col-3">
              <div className="header-event-details">
                <span className="header-event-date">7th August - Crypto Currency</span>
                <span className="header-event-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
