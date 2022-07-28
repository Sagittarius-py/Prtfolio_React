import "../style/about_card.css";

import { motion } from "framer-motion";

const AboutCard = (props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: props.delay }}
        id={props.id}
      >
        <div className="card-body">
          <div className="inner-card-body">{props.children}</div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutCard;
