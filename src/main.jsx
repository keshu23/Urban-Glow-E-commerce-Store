import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  /* wrapping App Component under provider and importing store part of configure store component from store.jsx */

  <BrowserRouter>
    <Navbar />
    <App />
  </BrowserRouter>
);
