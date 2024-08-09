import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Service from "./components/Service";

import { createContext } from "react";
import Comp3 from "./components/Comp3";

const data = createContext();
const data1 = createContext();

function App() {
  const name = "keshav-jha";
  const gender = "male";

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Products />} />
        <Route path="/service" element={<Service />} />
      </Routes>

      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <Comp3 />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export { data, data1 };
