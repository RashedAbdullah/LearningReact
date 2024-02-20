import { useState } from "react";
import { useEffect } from "react";
import { api } from "./api/api";

const App = () => {
  const [postData, setPostData] = useState([]);
  // Get data:
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await api.get(`/posts`);
        setPostData(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchingData();
  }, []);

  // handle add post:
  const [title, setTitle] = useState("");
  const handleAddPost = async (e) => {
    e.preventDefault();
    const id = postData.length
      ? Number(postData[postData.length - 1].id) + 1
      : 1;
    const addedPost = {
      id: id.toString(),
      title,
    };

    const response = await api.post(`/posts`, addedPost);
    setPostData([...postData, response.data]);
    setTitle("");
  };

  // handle delete post:
  const handleDeletePost = async (id) => {
    if (confirm("Are you want to delete this post?")) {
      await api.delete(`/posts/${id}`);
      const updateposts = postData.filter((post) => post.id !== id);
      setPostData(updateposts);
    } else {
      console.log("You chose not to delete this post");
    }
  };

  // handle update post:
  const handleUpdatePost = async (post) => {
    const response = await api.patch(`/posts/${post.id}`, post);

    const updatedPosts = postData.map((update) =>
      update.id === response.data.id ? response.data : update
    );

    setPostData(updatedPosts);
  };
  return (
    <div className="">
      <div>
        {postData.map((data) => (
          <div key={data.id} className="flex gap-5">
            <p>{data.id}</p>
            <p>{data.title}</p>
            <button onClick={() => handleDeletePost(data.id)}>❌</button>
            <button onClick={() => handleUpdatePost(data)} className="text-2xl">
              📝
            </button>
          </div>
        ))}
      </div>

      {/* add a post */}
      <div>
        <form
          onSubmit={handleAddPost}
          className="bg-gray-200 p-5 mt-10 flex gap-5 items-center"
        >
          <div>
            Title:{" "}
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
          </div>
          <button className="text-2xl">➕</button>
        </form>
      </div>
    </div>
  );
};

export default App;
