import "../style/navbar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-content">
        <button className="nav-bar-btn">Home</button>
        <span className="separator" />
        <button className="nav-bar-btn">About</button>
        <span className="separator" />
        <button className="nav-bar-btn">Projects</button>
        <span className="separator" />
        <button className="nav-bar-btn">Contact</button>
      </div>
    </div>
  );
};

export default NavBar;
