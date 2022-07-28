import "../style/section_about.css";

import { motion } from "framer-motion";

const About = () => {
	return (
		<>
			<section className="about-section" id="about">
				<div className="shadow-about shadow-top" />

				<div className="about-container">
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.5 }}
						id="about-card-one"
					>
						<div className="card-body"></div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 1.5 }}
						id="about-card-two"
					>
						<div className="card-body"></div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 2.5 }}
						id="about-card-three"
					>
						<div className="card-body"></div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 3.5 }}
						id="about-card-four"
					>
						<div className="card-body"></div>
					</motion.div>
				</div>

				<div className="shadow-about shadow-bot" />
			</section>
		</>
	);
};

export default About;
