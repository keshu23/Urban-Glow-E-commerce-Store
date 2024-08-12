import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Service from "./components/Service";
<<<<<<< HEAD
=======

import { createContext } from "react";
import Comp3 from "./components/Comp3";

const data = createContext();
const data1 = createContext();
>>>>>>> 1cddcca0dd427f738184c9e04b86e31ccedcab7d

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Products />} />
        <Route path="/service" element={<Service />} />
      </Routes>

<<<<<<< HEAD
      
=======
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <Comp3 />
        </data1.Provider>
      </data.Provider>
>>>>>>> 1cddcca0dd427f738184c9e04b86e31ccedcab7d
    </>
  );
}

export default App;

