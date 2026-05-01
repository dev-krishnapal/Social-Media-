import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/post-store-list";
import { useContext } from "react";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card postCard" style={{ width: "28rem" }}>
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ cursor: "pointer" }}
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </span>
        <h5 className="card-title">{post.title} </h5>
        <p className="card-text">{post.body}</p>
        <div className="alert alert-info">
          Total no of people reacted are {post.reactions.likes}
        </div>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary postTag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Post;
