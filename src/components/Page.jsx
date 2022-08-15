import NavBar from "./navbar";
import Home from "./section_home";
import About from "./section_about";
import Projects from "./section_projects";

const Page = () => {
  //!!! will finish sometime in future {
  let visible = {
    homeSection: false,
    aboutSection: false,
    projectSection: false,
  };
  const changeVisibility = (section, isVisible) => {
    if (section === "homeSection") {
      visible.homeSection = isVisible;
    } else if (section === "aboutSection") {
      visible.aboutSection = isVisible;
    } else if (section === "projectsSection") {
      visible.projectSection = isVisible;
    }
  };

  //!!! } will finish sometime in future

  return (
    <>
      <div className="site-container">
        <NavBar visible={visible} changeVisibility={changeVisibility} />
        <div className="App wrapper ">
          <Home changeVisibility={changeVisibility} />
          <About changeVisibility={changeVisibility} />
          <Projects changeVisibility={changeVisibility} />
        </div>
      </div>
    </>
  );
};

export default Page;
