import "../style/section_home.css";

const Home = () => {
  return (
    <section className="home parallax__group">
      <div className="background" />
      <div className="title-container">
        <div className="title-inner-content ">
          <h1 className="hello">Hello</h1>
          <br />
          <h1 className="there">
            World
            <span className="dot">.</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
