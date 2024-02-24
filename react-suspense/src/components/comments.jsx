/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Comments = ({ selectedId }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoadnig, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${selectedId}/comments`
        );
        const data = await response.json();

        if (response.ok) {
          setIsLoading(false);
          setComments(data);
        } else {
          setIsLoading(false);
          setError("There was an error");
        }
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };
    fetchComments();
  }, [selectedId]);

  let CommentContents;
  if (error) {
    CommentContents = <div>{error}</div>;
  } else if (!error && isLoadnig) {
    CommentContents = <div>Loading commets...</div>;
  } else {
    CommentContents = (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mt-5">
      <h2 className="font-semibold text-2xl">Comments...</h2>
      <div>{CommentContents}</div>
    </div>
  );
};

export default Comments;
