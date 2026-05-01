import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../Store/post-store-list";
import Loader from "./Loader";

const PostList = () => {
  const { postList, featching } = useContext(PostListData);

  return (
    <>
      {featching && <Loader></Loader>}
      {!featching && postList.length === 0 && (
        <center>
          <div className="alert alert-danger" role="alert">
            No Post To Show! Right Now.
          </div>
        </center>
      )}
      <div className="postList">
        {!featching &&
          postList.map((post) => <Post key={post.id} post={post}></Post>)}
      </div>
    </>
  );
};

export default PostList;
