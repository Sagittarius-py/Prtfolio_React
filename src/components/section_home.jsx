import "../style/section_home.css";

import { useRef } from "react";
import useIsInViewport from "./isVisible";

const Home = () => {
  const ref1 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);
  console.log(isInViewport1);

  return (
    <section className="home parallax__group" ref={ref1}>
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
