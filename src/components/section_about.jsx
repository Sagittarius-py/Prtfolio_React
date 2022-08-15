import "../style/section_about.css";

import First from "./about_content/first";
import Secound from "./about_content/secound";
import Fourth from "./about_content/fourth";

import AboutCard from "./about_card";

import Profile from "../images/bg3.jpg";

const About = () => {
  return (
    <>
      <section className="about-section" id="about">
        <div className="shadow-about shadow-top" />

        <div className="about-container">
          <AboutCard id="about-card-one" background={Profile}>
            <First />
          </AboutCard>
          <AboutCard id="about-card-two">
            <Secound />
          </AboutCard>
          <AboutCard id="about-card-three"></AboutCard>
          <AboutCard id="about-card-four" onClick={true}>
            <Fourth />
          </AboutCard>
        </div>

        <div className="shadow-about shadow-bot" />
      </section>
    </>
  );
};

export default About;
