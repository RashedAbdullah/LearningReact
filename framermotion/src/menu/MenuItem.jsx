import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = [
  "#00008C",
  "#D309E1",
  "#9C1AFF",
  "#7700FF",
  "#4400FF",
  "#7700FF",
  "#7700FF",
];

export const MenuItem = ({icon}) => {
  const style = { border: `2px solid ${colors[icon.id]}`, display: "flex", justifyContent: "center", alignItems: "center" };

  return (
    <motion.li className="singleSideBar" onClick={()=>{
        console.log(icon.id)
    }}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}>
        {icon.icon}
      </div>
      <div className="text-placeholder" style={style}>
        {icon.title}
      </div>
    </motion.li>
  );
};
