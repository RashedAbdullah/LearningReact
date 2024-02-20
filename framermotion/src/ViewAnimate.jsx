import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ViewAnimate = () => {
  const ref = useRef();
  const useView = useInView(ref);
  useEffect(() => {
    console.log(useView);
  }, [useView]);
  return (

    // Change color when view
    <div className="h-[2000px]">
      <div
        ref={ref}
        className="mt-[1000px] h-[500px]  text-white p-3"
        style={{ backgroundColor: useView ? "green" : "blue", transition: "5s" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        impedit illo corporis repellat voluptatum fuga pariatur nisi sint
        aliquam, hic
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="h-[500px] bg-black text-white p-3 rounded"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        impedit illo corporis repellat voluptatum fuga pariatur nisi sint
        aliquam, hic
      </motion.div>
    </div>
  );
};

export default ViewAnimate;
