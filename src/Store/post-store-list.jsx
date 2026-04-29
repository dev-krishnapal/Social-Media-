import { useReducer, useContext, createContext } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type == "ADD_POST") {
    newPostList = [
      ...currentPostList,
      {
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
        userId: action.payload.userId,
        reactions: action.payload.reactions,
        tags: action.payload.tags,
      },
    ];
  } else if (action.type == "ADD_POSTS") {
    newPostList = action.payload.posts;
  }
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.id,
    );
  }
  return newPostList;
};

const PostListPriovider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    if (!userId || !postTitle || !postBody || !reactions || !tags) {
      alert("Please fill all fields");
      return;
    }
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: crypto.randomUUID(),
        title: postTitle,
        body: postBody,
        userId: userId,
        reactions: reactions,
        tags: tags,
      },
    });
  };
  const addPosts = (posts) => {
    dispatchPostList({
      type: "ADD_POSTS",
      payload: {
        posts: posts,
      },
    });
  };
  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id: id,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, addPosts, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Doing Coding",
    body: "asdkbcjuasvdc bandvcuaghedcf ",
    reactions: "3",
    userId: "user-3",
    tags: ["coding", "Building"],
  },
  {
    id: "2",
    title: "Doing Nothing",
    body: "asdkbcjuasvdc bandvcuaghedcf ",
    reactions: "9",
    userId: "user-4",
    tags: ["coding", "Building"],
  },
];

export default PostListPriovider;
