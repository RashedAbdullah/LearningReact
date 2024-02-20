import { useRef } from "react";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
const Drag = () => {
  //<FaHome color='red' size="90px" className='bg-black' title='this is icon'/>

  const insideBox = useRef(null);
  return (
    <>
      <div ref={insideBox} className=" h-svh flex gap-8 text-white">
        <motion.div
          whileTap={{ scale: 1.4 }}
          whileDrag={{ scale: 1.3 }}
          whileHover={{ scale: 1.2 }}
          dragConstraints={insideBox}
          drag
          className="bg-green-500 p-5 h-[200px] w-[250px] rounded-3xl"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          perferendis dicta sit pariatur reprehen maxime quia?
        </motion.div>
        <motion.div
          whileDrag={{ scale: 1.3 }}
          dragConstraints={insideBox}
          drag
          className="bg-blue-500 p-5 h-[200px] w-[250px] rounded-3xl"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          perferendis dicta sit pariatur reprehen maxime quia?
        </motion.div>
        <motion.div
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          transition={{ duration: 1 }}
          whileDrag={{ scale: 1.3 }}
          dragConstraints={insideBox}
          exit={{ rotate: "0deg" }} //don't know why
          drag
          className="bg-red-900 p-5 h-[200px] w-[250px] rounded-3xl"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          perferendis dicta sit pariatur reprehen maxime quia?
        </motion.div>
      </div>
    </>
  );
};

export default Drag;
