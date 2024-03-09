import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  const fetchPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch tha data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
      });
  };

  const fetchUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch tha data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
      });
  };

  useEffect(() => {
    fetchPost();
    fetchUser();
  }, []);

  return (
    post && (
      <div>
        <div>
          <h1>{post.title}</h1>
          <div>{post.body}</div>
        </div>
        {user && (
          <div>
            <h4>{user.username}</h4>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
          </div>
        )}
      </div>
    )
  );
};

export default PostDetails;
