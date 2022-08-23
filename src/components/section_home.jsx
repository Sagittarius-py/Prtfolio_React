import "../style/section_home.css";

import { useRef } from "react";

import useIsInViewport from "./isVisible";

const Home = (props) => {
  const ref1 = useRef(null);
  let isVisible1 = useIsInViewport(ref1);
  props.changeVisibility("homeSection", isVisible1);

  return (
    <section id="home" className="home parallax__group" ref={ref1} name="home">
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
