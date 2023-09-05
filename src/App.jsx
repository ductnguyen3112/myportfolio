import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import HomePage from "./components/layouts/Layout";
import Story from "./components/layouts/Story";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Routes>
        <Route path="/story" element={<Story />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
