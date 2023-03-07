import React from "react";

const PostCategory = (categoryObject) => {
  const exactPostCat = categoryObject.categoryObject.reduce((acc, currVal) => {
    if (!currVal.name.startsWith("_")) {
      acc = currVal.name;
    }
    return acc;
  }, 0);
  return <>{exactPostCat}</>;
};

export default PostCategory;
