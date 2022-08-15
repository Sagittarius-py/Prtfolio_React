import "../../style/about_content/secound.css";

import React from "react";
import { motion } from "framer-motion";

import Text from "./about";

const Second = () => {
  return (
    <>
      <motion.div className="about-tile">
        <motion.h1>About Me</motion.h1>
        <motion.p className="hashtags">
          #student #programmer #opolskie #poland
        </motion.p>
        <motion.p className="about-content">
          <Text />
        </motion.p>
      </motion.div>
    </>
  );
};

export default Second;
