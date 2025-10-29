import AnimeCard from "../components/AnimeCard";
import { useState, useEffect } from "react";
import { searchAnime, getPopularAnimes } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [anime, setAnime] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularAnime = async () => {
      setLoading(true);
      setError(null);
      try {
        const popularAnimes = await getPopularAnimes();
        setAnime(popularAnimes);
      } catch (err) {
        setError("Failed to load anime");
      } finally {
        setLoading(false);
      }
    };

    loadPopularAnime();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const results = await searchAnime(searchQuery.trim());
      setAnime(results);
      setError(null);
    } catch (err) {
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <div className="container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for anime ..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        {loading && <p className="container">Loading...</p>}
        {error && <p className="container error">{error}</p>}
        <div className="show-grid container">
          {!loading && !error && anime.length === 0 && <p>No anime found.</p>}
          {!loading &&
            !error &&
            anime.map((item) => <AnimeCard anime={item} key={item.mal_id} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
