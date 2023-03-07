import Head from "next/head";
import React from "react";
import SideBar from "../../components/sidebar";
import SinglePost from "../../components/single-post";

const Single = () => {
  return (
    <div>
      <div className="single-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9">
              <SinglePost />
            </div>
            <div className="col-3">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
