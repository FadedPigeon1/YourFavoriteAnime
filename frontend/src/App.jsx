import "./css/App.css";
import Favorite from "./pages/Favorite";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AnimeProvider } from "./contexts/AnimeContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <AnimeProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </AnimeProvider>
  );
}

export default App;
