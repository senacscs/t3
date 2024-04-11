import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <article>
      <h1>Posts from our API call</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>ID #{post.id} {post.title}</h2>
          <img src={post.thumbnailUrl} />
        </article>
      ))}
    </article>
  );
}

export default App;