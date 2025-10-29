import "../css/Favorite.css";
import { useAnimeContext } from "../contexts/AnimeContext";
import AnimeCard from "../components/AnimeCard";

function Favorite() {
  const { favorites } = useAnimeContext();

  return (
    <div className="favorite">
      <div className="container">
        <h2>Your Favorites</h2>
        <div className="show-grid">
          {favorites.length === 0 ? (
            <div className="favorites-empty">
              <h3>No favorites yet</h3>
              <p>Add some from the Home page ♥</p>
            </div>
          ) : (
            favorites.map((item) => (
              <AnimeCard anime={item} key={item.mal_id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorite;
