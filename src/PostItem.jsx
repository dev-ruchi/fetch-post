import { Link } from "react-router-dom";

const PostItem = ({ post, handleNotInterested }) => {
  return (
    <div className={`post-preview`} key={post.id}>
      <Link to={`/posts/${post.id}`}>
        <h3 className="heading">{post.title}</h3>
        <p className="body">{post.body}</p>
      </Link>
      <button onClick={() => handleNotInterested(post.id)}>Not interested</button>
    </div>
  );
};

export default PostItem;
