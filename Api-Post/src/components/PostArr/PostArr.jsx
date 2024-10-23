import React, { useEffect, useState } from "react";
import Post from "./../Post/Post";

const PostArr = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => setPost(result));
  }, []);

  const postThirty = post.slice(0, 30);

  return (
    <>
      <div className = "post-container">
        {postThirty.map((item, index) => (
          <Post key={index} title={item.title} id={item.id} body={item.body} />
        ))}
      </div>
    </>
  );
};

export default PostArr;
