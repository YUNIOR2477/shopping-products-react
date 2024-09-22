import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ShoppingContextProvider } from "./context/ShoppingContext.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShoppingContextProvider>
      <App />
    </ShoppingContextProvider>
  </StrictMode>
);
