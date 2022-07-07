if (!JSON.parse(localStorage.getItem('favSongs'))) {
  localStorage.setItem('favSongs', JSON.stringify([]));
}

export const readFavoriteSongs = () => JSON.parse(localStorage.getItem('favSongs'));

const saveFavoriteSongs = (favoriteSongs) => localStorage
  .setItem('favSongs', JSON.stringify(favoriteSongs));


export const getFavoriteSongs = () => readFavoriteSongs();

export const addSong = (song) => {
  const favoriteSongs = readFavoriteSongs();
  saveFavoriteSongs([...favoriteSongs, song]);
}

export const removeSong = (song) => {
  const favoriteSongs = readFavoriteSongs();
  saveFavoriteSongs(favoriteSongs.filter((s) => s !== song));
}