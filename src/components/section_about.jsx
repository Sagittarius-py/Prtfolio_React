import "../style/section_about.css";

import { useRef } from "react";
import useIsInViewport from "./isVisible";

import First from "./about_content/first";
import Secound from "./about_content/secound";
import Third from "./about_content/third";
import Fourth from "./about_content/fourth";

import AboutCard from "./about_card";

import Profile from "../images/bg3.jpg";

const About = (props) => {
	const ref2 = useRef(null);
	let isVisible2 = useIsInViewport(ref2);
	props.changeVisibility("aboutSection", isVisible2);

	return (
		<>
			<section className="about-section" id="about" ref={ref2} name="about">
				<div id="about-bg1" className="about-tiles-bg" />

				<div className="shadow-about shadow-top" />
				<div className="about-container">
					<AboutCard id="about-card-one" background={Profile}>
						<First />
					</AboutCard>
					<AboutCard id="about-card-two">
						<Secound />
					</AboutCard>
					<AboutCard id="about-card-three">
						<Third />
					</AboutCard>
					<AboutCard id="about-card-four" click={true}>
						<Fourth />
					</AboutCard>
				</div>

				<div className="shadow-about shadow-bot" />
			</section>
		</>
	);
};

export default About;
