import React from "react";
import PostCard from "../models/posts/postCard";

const Wanted: React.VFC = () => {
  return (
    <>
      <h1>Wanted</h1>
      <div className="px-2 py-3 h-full bg-gray-400">
        <PostCard />
      </div>
    </>
  );
};

export default Wanted;
