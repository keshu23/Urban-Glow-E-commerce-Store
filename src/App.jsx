import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Service from "./components/Service";
import Comp1 from "./components/Comp1";
import { createContext } from "react";

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
          <Comp1 />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export { data, data1 };
