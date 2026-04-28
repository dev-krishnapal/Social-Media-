import { useContext, useRef } from "react";
import { PostList } from "../Store/post-store-list";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, postTitle, postBody, reactions, tags);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };
  return (
    <>
      <form className="createPostForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            id="userId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            ref={postTitleElement}
            type="text"
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postBody" className="form-label">
            Content
          </label>
          <textarea
            ref={postBodyElement}
            rows={4}
            type="text"
            className="form-control"
            id="postBody"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            No of Reaction
          </label>
          <input
            ref={reactionsElement}
            type="number"
            className="form-control"
            id="reaction"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tag
          </label>
          <input
            ref={tagsElement}
            type="text"
            className="form-control"
            id="tags"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePost;
