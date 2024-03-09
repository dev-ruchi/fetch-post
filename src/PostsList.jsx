import { useState, useEffect } from "react";
import PostItem from "./PostItem";


const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch tha data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setError(null);
      })
      .catch((err) => {
        setPosts("");
        setError(err.message);
      });
  };

  const handleNotInterested = (id) => {
    console.log("CLICKED -> Not interested");
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>

      {posts.map((post) => (
        <PostItem
          post={post}
          handleNotInterested={handleNotInterested}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostsList;
