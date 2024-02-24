/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getPosts } from "../api/getPosts";

const posts = getPosts(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
const PostSelector = ({ onSelectPost }) => {
  // const [postData, setPostData] = useState([]);
  // const [postErrors, setPostErrors] = useState(null);
  // const [isLoadingData, setIsLoadingData] = useState(false);

  // useEffect(() => {
  //   setIsLoadingData(true);
  //   setPostErrors(null);
  //   const fetchPostFunc = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://jsonplaceholder.typicode.com/posts?_limit=10`
  //       );
  //       const data = await response.json();

  //       if (response.ok) {
  //         setIsLoadingData(false);
  //         setPostData(data);
  //       } else {
  //         setIsLoadingData(false);
  //         setPostErrors("There was an error");
  //       }
  //     } catch (err) {
  //       setIsLoadingData(false);
  //       setPostErrors(err.message);
  //     }
  //   };
  //   fetchPostFunc();
  // }, []);

  // let postContent;
  // if (isLoadingData) {
  //   postContent = <div>Loadin your data...</div>;
  // } else if (!isLoadingData && postErrors) {
  //   postContent = <div>{postErrors}</div>;
  // } else {
  //   postContent = (
  //     <select
  //       onChange={onSelectPost}
  //       className="bg-gray-200 p-2 rounded-none w-full"
  //     >
  //       <option value="">Select Post</option>
  //       {postData.map((post) => (
  //         <option key={post.id} value={post.id}>
  //           {post.title}
  //         </option>
  //       ))}
  //     </select>
  //   );
  // }

  // return <div className="bg-gray-200 w-[40vw]">{postContent}</div>;
  // throw new Promise(() => console.log("Somthing..."));

  const datas = posts.read();
  // console.log(datas);

  return (
    <div className="bg-gray-200 w-[40vw]">
      <select
        onChange={onSelectPost}
        className="bg-gray-200 p-2 rounded-none w-full"
      >
        <option value="">Select Post</option>
        {datas.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PostSelector;
