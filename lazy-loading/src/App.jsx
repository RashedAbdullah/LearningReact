import { Suspense, useState } from "react";
import { demos } from "./api/demos";
import { importDemo } from "./utils/importdemo";

const App = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const selectDemoFunc = async (file) => {
    const Demo = await importDemo(file);
    const DemoComponent = <Demo />;
    setSelectedDemo(DemoComponent);
  };

  return (
    <div className="m-40">
      <div>
        <h2 className="font-semibold text-3xl">Ract Lazy Loading</h2>
        <div className="flex mt-5 gap-10 text-lg pb-10 border-b">
          {demos.map((demo) => (
            <button
              key={demo.type}
              onClick={() => selectDemoFunc(demo.file)}
              className="bg-green-500 text-white py-1 px-3 rounded"
            >
              {demo.type}
            </button>
          ))}
        </div>
        <Suspense fallback={<h2>Loading your componets...</h2>}>
          <div className="pt-10 border-t text-3xl">{selectedDemo}</div>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
