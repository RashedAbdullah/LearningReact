import { useState } from "react";
import { sculptureList } from "./components/data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [isShowDetails, setIsShowDetails] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-green-500 py-1 px-4 rounded text-white m-5"
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button
        onClick={() => setIsShowDetails(!isShowDetails)}
        className="bg-gray-500 text-white p-2 rounded m-2"
      >
        Details {!isShowDetails ? "🔽": "🔼"}
      </button>
      {isShowDetails && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
