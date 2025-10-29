import "../css/AnimeCard.css";
import { useAnimeContext } from "../contexts/AnimeContext";

const AnimeCard = ({ anime }) => {
  const { isFavorite, addToFavorite, removeFromFavorite } = useAnimeContext();
  const favorite = isFavorite(anime?.mal_id);
  function onFavoriteClick(e) {
    e.preventDefault();
    if (!anime) return;
    if (favorite) removeFromFavorite(anime.mal_id);
    else addToFavorite(anime);
  }

  const imageUrl =
    anime?.images?.jpg?.image_url || anime?.images?.webp?.image_url || "";
  const title = anime?.title || anime?.title_english || "Untitled";
  const year =
    anime?.year ??
    (anime?.aired?.from ? new Date(anime.aired.from).getFullYear() : "");

  return (
    <div className="anime-card">
      <div className="anime-poster">
        <img src={imageUrl} alt={title} />
        <div className="anime-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="anime-info">
        <h3>{title}</h3>
        {year && <p>{year}</p>}
      </div>
    </div>
  );
};

export default AnimeCard;
