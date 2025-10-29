
export const getPopularAnimes = async () => {
    const response = await fetch(`${"https://api.jikan.moe/v4/top/anime?limit=25"}`);
    const json = await response.json();
    return json.data;
};

export const searchAnime = async (query) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=25`);
    const data = await response.json();
    return data.data;

};

