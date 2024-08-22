import { lazy, Suspense } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

<<<<<<< HEAD
const Home = lazy(() => import("./components/Home"));
=======
const Home = lazy(() => import("./components/Home" ));
>>>>>>> 8d40b1014f446e5ea114b083955b6521863b1831

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
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
