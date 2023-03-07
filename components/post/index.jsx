import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div>
      <div className="post">
        <Image
          className="postImg"
          src="/assets/user-one.jpeg"
          alt="Picture of the author"
          width={200}
          height={200}
        />
        <div className="posInfoContainer">
          <div className="postCategories">
            <span className="postCat">Tech News</span>
            <span className="postCat">Startups</span>
          </div>
          <span className="postTitle">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </span>
          <hr />
          <span className="postDate">1 Hour Ago</span>
        </div>
        <p className="postDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          atque enim magni illum amet aliquam velit? Omnis suscipit beatae
          tempora eos tempore consequuntur a? Fugiat, est. Dolorem culpa modi
          nihil!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          atque enim magni illum amet aliquam velit? Omnis suscipit beatae
          tempora eos tempore consequuntur a? Fugiat, est. Dolorem culpa modi
          nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          atque enim magni illum amet aliquam velit? Omnis suscipit beatae
          tempora eos tempore consequuntur a? Fugiat, est. Dolorem culpa modi
          nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          atque enim magni illum amet aliquam velit? Omnis suscipit beatae
          tempora eos tempore consequuntur a? Fugiat, est. Dolorem culpa modi
          nihil!
        </p>
      </div>
    </div>
  );
};

export default Post;
