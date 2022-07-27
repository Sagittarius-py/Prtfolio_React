import "./App.css";


import NavBar from "./components/navbar";
import Home from "./components/section_home";
import About from "./components/section_about";

function App() {
  return (
    <>
      <NavBar />
      <div className="App wrapper ">
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
