import { useReducer, useContext, createContext } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
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
        reactiion: action.payload.reaction,
        tags: action.payload.tags,
      },
    ];
  }
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.id,
    );
  }
  return newPostList;
};

const PostListPriovider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );

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
        reaction: reactions,
        tags: tags,
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
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Doing Coding",
    body: "asdkbcjuasvdc bandvcuaghedcf ",
    reaction: "3",
    userId: "user-3",
    tags: ["coding", "Building"],
  },
  {
    id: "2",
    title: "Doing Nothing",
    body: "asdkbcjuasvdc bandvcuaghedcf ",
    reaction: "9",
    userId: "user-4",
    tags: ["coding", "Building"],
  },
];

export default PostListPriovider;
