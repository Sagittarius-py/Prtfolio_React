import "../style/about_card.css";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const AboutCard = (props) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <motion.div
        layoutId={props.id}
        onClick={() => setSelectedId(props.id)}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        id={props.id}
      >
        <div className="card-body">
          <div className="inner-card-body">{props.children}</div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId} className="card-body-expanded">
            <div className="inner-card-body-expanded">
              {props.children}
              <motion.button
                initial={{ opacity: 0.6 }}
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.9 }}
                className="expanded-div-close"
                onClick={() => setSelectedId(null)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutCard;
