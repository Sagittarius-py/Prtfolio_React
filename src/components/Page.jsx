import NavBar from "./navbar";
import Home from "./section_home";
import About from "./section_about";

const Page = () => {
  return (
    <>
      <div className="site-container">
        <NavBar />
        <div className="App wrapper ">
          <Home />
          <About />
        </div>
      </div>
    </>
  );
};

export default Page;
