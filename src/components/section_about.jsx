import "../style/section_about.css";

import { motion, useScroll } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="about-section" id="about">
        <div className="shadow-about shadow-bot" />

        <div className="about-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="about-title">cokolwiek</h1>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
