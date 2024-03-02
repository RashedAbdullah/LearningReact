import { useState } from "react";
import { createPortal } from "react-dom";

const ModalContent = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="h-36 overflow-hidden">
      <button
        onClick={() => setToggle(!toggle)}
        className="py-2 px-10 bg-green-500 text-white rounded mt-10"
      >
        Toggle
      </button>
      {toggle &&
        createPortal(
          <div className="flex fixed justify-center align-middle items-center bg-black bg-opacity-50 h-screen top-0">
            <div className="py-10 bg-gray-200 px-72 mx-60 border text-center">
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Magnam, dolor? Nulla quidem beatae aliquam, amet enim porro quod
                molestias fuga voluptatum culpa eos corrupti et esse? Unde nemo
                inventore consectetur.
              </p>
              <button
                onClick={() => setToggle(false)}
                className="py-2 px-10 bg-red-500 text-white rounded mt-10"
              >
                Close
              </button>
            </div>
          </div>,
          document.querySelector("#portals")
        )}
    </div>
  );
};

export default ModalContent;
