import React from "react";
import Image from "next/image";
import Head from "next/head";

const SideBar = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
      </Head>
      <div className="sideBar">
        <div className="sideBarItem">
          <span className="sideBarTite">ABOUT ME</span>
          <Image
            className="sideBarImg"
            src="/assets/user-one.jpeg"
            alt="Picture of the author"
            width={200}
            height={200}
          />
          <p className="sideBarAboutMeText">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            ratione voluptate perferendis temporibus debitis repudiandae omnis
            quos dolores nihil asperiores ipsam ipsum nulla minus quas corrupti
            accusamus, deleniti facilis corporis.
          </p>
        </div>
        <div className="sideBarItem">
          <span className="sideBarTite">CATEGORIES</span>
          <ul className="sideBarList">
            <li className="sideBarListItem">Tech News</li>
            <li className="sideBarListItem">How Tos</li>
            <li className="sideBarListItem">Podcast</li>
            <li className="sideBarListItem">Events</li>
            <li className="sideBarListItem">Startups</li>
            <li className="sideBarListItem">CyberSecurity</li>
          </ul>
        </div>
        <div className="sideBarItem">
          <span className="sideBarTite">FOLLOW US</span>
          <div className="sideBarSocial">
            <i className=" sideBarIcon bi bi-facebook"></i>
            <i className=" sideBarIcon bi bi-twitter"></i>
            <i className=" sideBarIcon bi bi-instagram"></i>
            <i className=" sideBarIcon bi bi-google"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
