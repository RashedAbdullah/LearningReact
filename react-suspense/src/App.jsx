import { Suspense, useState } from "react";
import PostSelector from "./components/postSelector";
import Comments from "./components/comments";

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const hanldeSelectPost = (e) => {
    setSelectedId(e.target.value);
  };
  return (
    <div className="my-10 mx-40">
      <Suspense fallback={<h2>Loading Data by Suspense...</h2>}>
        <PostSelector onSelectPost={hanldeSelectPost} />
      </Suspense>
      {selectedId && <Comments selectedId={selectedId} />}
    </div>
  );
};

export default App;
