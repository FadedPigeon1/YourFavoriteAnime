import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import App from "./App.jsx";
import { AnimeProvider } from "./contexts/AnimeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AnimeProvider>
        <App />
      </AnimeProvider>
    </BrowserRouter>
  </StrictMode>
);
