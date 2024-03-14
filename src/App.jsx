import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layouts from "./Components/comman/layout/Layouts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layouts>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Layouts>
      </BrowserRouter>
    </>
  );
}

export default App;
