import "../../style/about_content/secound.css";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Second = () => {
  const items = [
    {
      id: 1,
      name: "Middle School",
      fullname: "ZSiPO im. Emila Godlewskiego w Nysie",
    },
    {
      id: 2,
      name: "University",
      fullname: "University of Applied Sciences in Nysa",
    },
    {
      id: 3,
      name: "cokolwie",
      fullname: "University of Applied Sciences in Nysa",
    },
    {
      id: 4,
      name: "QWPAWEF",
      fullname: "University of Applied Sciences in Nysa",
    },
    {
      id: 5,
      name: "QWORINPK",
      fullname: "University of Applied Sciences in Nysa",
    },
  ];
  return (
    <>
      <motion.div className="education-title-container">
        <motion.h1 className="education-title">Education</motion.h1>
      </motion.div>
      {items.map((item) => {
        let temp = item.id % 2;
        return (
          <>
            <motion.div
              className={
                temp === 1
                  ? "left education-container"
                  : "right education-container"
              }
            >
              <motion.div className="education-inner-container">
                <motion.h5>{item.name}</motion.h5>
                <motion.h3>{item.fullname}</motion.h3>
              </motion.div>
            </motion.div>
          </>
        );
      })}
    </>
  );
};

export default Second;
