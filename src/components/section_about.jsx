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
            <div className="pic-container">
              <img src={profile} alt="profile" id="profile-pic" />
            </div>
            <div className="paragraph-container">
              <p className="about-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vitae nunc commodo, interdum mauris ac, congue elit.
                Aliquam et turpis et arcu volutpat laoreet. Quisque a vehicula
                urna, in tincidunt diam. Fusce posuere tortor eu orci tempor
                aliquam. Curabitur ultrices diam blandit massa vulputate, at
                semper nisi tristique. Maecenas elementum bibendum mauris, a
                viverra leo tempus id. Sed quis leo vitae augue iaculis posuere.
                Maecenas sed massa auctor, malesuada justo vitae, cursus mi. Sed
                ac urna leo.
              </p>
            </div>
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
