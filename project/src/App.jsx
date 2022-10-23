import { useState } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./Pages/Books";
import "./App.css";
import Layouts from "./Components/Layouts";

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
