import "../style/about_card.css";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const AboutCard = (props) => {
	const [selectedId, setSelectedId] = useState(null);

	return (
		<>
			<motion.div
				layoutId={props.id}
				onClick={() => {
					if (props.click) setSelectedId(props.id);
				}}
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				id={props.id}
			>
				<div className="card-body">{props.children}</div>
			</motion.div>

		</>
	);
};

export default AboutCard;
