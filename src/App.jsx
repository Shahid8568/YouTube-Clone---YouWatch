import React from "react";
import MainCont from "./Components/MainCont";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searchresults from "./Components/Searchresults";
import Singlevd from "./Components/Singlevd";
import "./Components/style.css";

export default function App() {
  const [progress, setProgress] = useState(5);
  const [mode, setMode] = useState("black");
  const toggleMode = () => {
    if (mode === "white") {
      setMode("black");
    } else {
      setMode("white");
    }
  };

  return (
    <BrowserRouter>
      <Navbar toggleMode={toggleMode} mode={mode} />
      <LoadingBar height={3} color="red" progress={progress} />
      <Routes>
        <Route
          path="/"
          exact
          element={<MainCont mode={mode} setProgress={setProgress} />}
        />
        <Route
          path="/:videoId"
          element={<Singlevd mode={mode} setProgress={setProgress} />}
        />
        <Route
          path="/search/:search"
          element={<Searchresults mode={mode} setProgress={setProgress} />}
        />
        <Route
          path="/search/:search/:videoId"
          element={<Singlevd setProgress={setProgress} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
