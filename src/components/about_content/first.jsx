import profile from "../../images/prof.jpg";

import "../../style/about_content/first.css";

const First = () => {
  return (
    <>
      <div className="pic-container">
        <img src={profile} alt="profile" id="profile-pic" />
      </div>
      <div className="paragraph-container">
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vitae nunc commodo, interdum mauris ac, congue elit. Aliquam et turpis
          et arcu volutpat laoreet. Quisque a vehicula urna, in tincidunt diam.
          Fusce posuere tortor eu orci tempor aliquam. Curabitur ultrices diam
          blandit massa vulputate, at semper nisi tristique. Maecenas elementum
          bibendum mauris, a viverra leo tempus id. Sed quis leo vitae augue
          iaculis posuere. Maecenas sed massa auctor, malesuada justo vitae,
          cursus mi. Sed ac urna leo.
        </p>
      </div>
    </>
  );
};

export default First;
