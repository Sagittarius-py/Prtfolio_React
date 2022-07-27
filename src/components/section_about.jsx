import "../style/section_about.css";

import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="about-section" id="about">
        <div className="shadow-about shadow-top" />

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

        <div className="shadow-about shadow-bot" />
      </section>
    </>
  );
};

export default About;
