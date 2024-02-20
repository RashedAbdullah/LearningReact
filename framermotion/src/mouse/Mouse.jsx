import "./styles.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./Use-follow-pointer";

export default function Mouse() {
  const ref = useRef(null);
  console.log(ref);
  const { x, y } = useFollowPointer(ref);

  return (
    <div className=" h-[400px] w-[400px] bg-lime-600 cursor-none">
      <motion.div
        ref={ref}
        className="box"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 100,
          restDelta: 0.001,
        }}
      ></motion.div>
    </div>
  );
}
