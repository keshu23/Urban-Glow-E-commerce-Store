import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Service from "./components/Service";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Products />} />
        <Route path="/service" element={<Service />} />
      </Routes>

      
    </>
  );
}

export default App;

