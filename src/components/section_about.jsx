import "../style/section_about.css";

import profile from "../images/prof.jpg";

import AboutCard from "./about_card";

const About = () => {
  return (
    <>
      <section className="about-section" id="about">
        <div className="shadow-about shadow-top" />

        <div className="about-container">
          <AboutCard delay="0.5" id="about-card-one">
            <img src={profile} alt="profile" id="profile-pic" />
          </AboutCard>
          <AboutCard delay="1" id="about-card-two"></AboutCard>
          <AboutCard delay="1.5" id="about-card-three"></AboutCard>
          <AboutCard delay="2" id="about-card-four"></AboutCard>
        </div>

        <div className="shadow-about shadow-bot" />
      </section>
    </>
  );
};

export default About;
