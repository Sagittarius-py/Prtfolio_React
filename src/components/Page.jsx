import NavBar from "./navbar";
import Home from "./section_home";
import About from "./section_about";
import Projects from "./section_projects";

const Page = () => {
  return (
    <>
      <div className="site-container">
        <NavBar />
        <div className="App wrapper ">
          <Home />
          <About />
          <Projects />
        </div>
      </div>
    </>
  );
};

export default Page;
