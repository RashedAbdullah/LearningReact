import { useState } from "react";

const Pointer = () => {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  return (
    <div>
      <div
        onPointerMove={(e) => {
          setPointer({ x: e.clientX, y: e.clientY });
        }}
        style={{ height: "100vh" }}
      >
        <div
          style={{
            height: "20px",
            width: "20px",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${pointer.x}px, ${pointer.y}px)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Pointer;
