import "../style/section_about.css";

import First from "./about_content/first";
import Secound from "./about_content/secound";

import AboutCard from "./about_card";

const About = () => {
  return (
    <>
      <section className="about-section" id="about">
        <div className="shadow-about shadow-top" />

        <div className="about-container">
          <AboutCard id="about-card-one">
            <First />
          </AboutCard>
          <AboutCard id="about-card-two">
            <Secound />
          </AboutCard>
          <AboutCard id="about-card-three"></AboutCard>
          <AboutCard id="about-card-four">
            <h1>Contact with Me</h1>
          </AboutCard>
        </div>

        <div className="shadow-about shadow-bot" />
      </section>
    </>
  );
};

export default About;
