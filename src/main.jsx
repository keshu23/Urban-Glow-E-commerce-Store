import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { Provider } from "react-redux";
import store from "./redux/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  /* wrapping App Component under provider and importing store part of configure store component from store.jsx */

  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </Provider>
);
