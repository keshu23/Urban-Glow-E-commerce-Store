import { lazy, Suspense } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";

const Home = lazy(() => import("./components/Home"));

const Product = lazy(() => import("./components/Products"));
const Cart = lazy(() => import("./components/Cart"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <h1 className="text-center text-purple-500 pt-10 font-bold">
            wait your page is Loading...
          </h1>
        }
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
