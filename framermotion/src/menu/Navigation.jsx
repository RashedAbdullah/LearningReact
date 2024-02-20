import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { FaHome } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdText } from "react-icons/io";
import { TbDeviceImacCode } from "react-icons/tb";
import { MdOutlineReadMore } from "react-icons/md";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const size = "1.5rem"
const itemIds = [
    {
        id: 0,
        title: "Home",
        icon: <FaHome size={size} color="rgb(0, 36, 36)" />
    },
    {
        id: 1,
        title: "Projects",
        icon: <AiFillProject size={size} color="rgb(0, 36, 36)" />
    },
    {
        id: 2,
        title: "Services",
        icon: <TbDeviceImacCode size={size} color="rgb(0, 36, 36)" />
    },
    {
        id: 3,
        title: "About",
        icon: <FaUser size={size} color="rgb(0, 36, 36)" />
    },
    {
        id: 4,
        title: "Blogs",
        icon: <IoMdText size={size} color="rgb(0, 36, 36)" />
    },
    {
        id: 5,
        title: "Settings",
        icon: <MdMiscellaneousServices size={size} color="rgb(0, 36, 36)"/>
    },
    {
        id: 6,
        title: "More options",
        icon: <MdOutlineReadMore size={size} color="rgb(0, 36, 36)" />
    }
];

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map((icon) => (
      <MenuItem icon={icon} key={icon.id}/>
    ))}
  </motion.ul>
);