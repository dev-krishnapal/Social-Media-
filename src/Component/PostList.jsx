import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../Store/post-store-list";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.length === 0 ? (
        <div className="alert alert-danger" role="alert">
          No Post To Show! Right Now.
        </div>
      ) : (
        postList.map((post) => <Post key={post.id} post={post}></Post>)
      )}
    </>
  );
};

export default PostList;
