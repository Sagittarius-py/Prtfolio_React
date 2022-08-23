import "../../style/about_content/fourth.css";

const Fourth = () => {
  return (
    <>
      <div className="pic-container-4" />
      <h1 className="title-contact-tile">Contact & Socialmedia</h1>
      <h3 className="title-contact-click">Click Here</h3>
      <div className="button-div">
        <div className="contact-btn-contain" id="phone-button-contain">
          <button className="contact-button" id="phone-button">
            Call Me
          </button>
        </div>
        <div className="contact-btn-contain" id="github-button-contain">
          <button className="contact-button" id="github-button">
            My Github
          </button>
        </div>
        <div className="contact-btn-contain" id="linked-button-contain">
          <button className="contact-button" id="linked-button">
            My linkedIn
          </button>
        </div>
        <div className="contact-btn-contain" id="mail-button-contain">
          <button className="contact-button" id="mail-button">
            Write to Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Fourth;
