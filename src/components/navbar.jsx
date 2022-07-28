import "../style/navbar.css";

import homeIco from "../icons/home.svg";

const NavBar = () => {
	return (
		<div className="nav-bar">
			<div className="nav-bar-content">
				<button className="nav-bar-btn"><img src={homeIco} className="nav-ico" /> Home</button>
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
