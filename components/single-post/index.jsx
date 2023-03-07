import Head from "next/head";
import React from "react";

const SinglePost = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
      </Head>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            src="assets/wallpaper-one.jpeg"
            alt="Post Featured Image"
            className="singlePostFeaturedImg"
          />
          <div className="Title-Edit-options-wrapper">
            <h1 className="singlePostTitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
              <div className="singlePostEditOptions">
                <i className="singlePostEditIcon bi bi-pencil-square"></i>
                <i className="singlePostEditIcon bi bi-trash-fill"></i>
              </div>
            </h1>
          </div>

          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>Tonny Gidraph</b>
            </span>
            <span className="singlePostDate">
              Date: <b>1 hour ago</b>
            </span>
          </div>
          <p className="singlePostDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            itaque deserunt tempora ex dolore accusantium, velit voluptatum.
            Facere nihil repellat eum repellendus necessitatibus porro velit,
            expedita inventore labore sint error!
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            itaque deserunt tempora ex dolore accusantium, velit voluptatum.
            Facere nihil repellat eum repellendus necessitatibus porro velit,
            expedita inventore labore sint error! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Autem itaque deserunt tempora ex
            dolore accusantium, velit voluptatum. Facere nihil repellat eum
            repellendus necessitatibus porro velit, expedita inventore labore
            sint error!
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            itaque deserunt tempora ex dolore accusantium, velit voluptatum.
            Facere nihil repellat eum repellendus necessitatibus porro velit,
            expedita inventore labore sint error!
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            itaque deserunt tempora ex dolore accusantium, velit voluptatum.
            Facere nihil repellat eum repellendus necessitatibus porro velit,
            expedita inventore labore sint error!
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            itaque deserunt tempora ex dolore accusantium, velit voluptatum.
            Facere nihil repellat eum repellendus necessitatibus porro velit,
            expedita inventore labore sint error!
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            itaque deserunt tempora ex dolore accusantium, velit voluptatum.
            Facere nihil repellat eum repellendus necessitatibus porro velit,
            expedita inventore labore sint error!
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            itaque deserunt tempora ex dolore accusantium, velit voluptatum.
            Facere nihil repellat eum repellendus necessitatibus porro velit,
            expedita inventore labore sint error!
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            itaque deserunt tempora ex dolore accusantium, velit voluptatum.
            Facere nihil repellat eum repellendus necessitatibus porro velit,
            expedita inventore labore sint error!
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
