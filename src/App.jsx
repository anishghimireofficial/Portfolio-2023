import React from "react";
import Home from "./assets/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuccessFul from "./components/SuccessFul";
import Error404 from "./components/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/successful" element={<SuccessFul />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
