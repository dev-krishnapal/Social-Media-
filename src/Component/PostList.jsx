import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../Store/post-store-list";

const PostList = () => {
  const { postList, addPosts } = useContext(PostListData);
  const handleOnClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      // .then((data) => console.log(data.posts));
      .then((data) => addPosts(data.posts));
  };
  return (
    <>
      {postList.length === 0 ? (
        <center>
          <div className="alert alert-danger" role="alert">
            No Post To Show! Right Now.
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => handleOnClick()}
          >
            Get Post From Server
          </button>
        </center>
      ) : (
        postList.map((post) => <Post key={post.id} post={post}></Post>)
      )}
    </>
  );
};

export default PostList;
