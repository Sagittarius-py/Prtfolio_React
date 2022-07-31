import React, { useState, useEffect } from "react";

import "./App.css";

import Page from "./components/Page";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, []);

  return <>{loading ? <Loading /> : <Page />}</>;
}

export default App;
