import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import HomePage from "./components/layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
