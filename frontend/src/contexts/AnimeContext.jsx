import { createContext, useState, useContext, useEffect } from "react";

const AnimeContext = createContext();

export const useAnimeContext = () => useContext(AnimeContext);

export const AnimeProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const addToFavorite = (anime) => {
    setFavorites((prev) => {
      if (prev.some((a) => a.mal_id === anime.mal_id)) return prev;
      return [...prev, anime];
    });
  };

  const removeFromFavorite = (animeId) => {
    setFavorites((prev) => prev.filter((anime) => anime.mal_id !== animeId));
  };

  const isFavorite = (animeId) => {
    return favorites.some((anime) => anime.mal_id === animeId);
  };

  const value = {
    favorites,
    addToFavorite,
    removeFromFavorite,
    isFavorite,
  };
  return (
    <AnimeContext.Provider value={value}>{children}</AnimeContext.Provider>
  );
};
