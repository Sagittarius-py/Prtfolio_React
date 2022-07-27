import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

class Application extends React.Component {
  render() {
    return <App />;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
