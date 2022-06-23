import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import MainPage from "./Page/MainPage";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
