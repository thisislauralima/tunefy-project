import { useState } from 'react';
import { addSong, removeSong, readFavoriteSongs } from '../../helpers/songsManagement';

export default function SongCard({ trackId, previewUrl, trackName }) {
  const [teste, setTeste] = useState([]);

  const handleSavedSongs = async ({ target }) => {
    if (target.checked) {
      addSong(target.name);
    } else {
      removeSong(target.name);
    }
    setTeste(readFavoriteSongs());
  }

  return (
    <div key={ trackId }>
    <ul>
      <li>
        <audio
          src={ previewUrl }
          controls
        >
          {/* <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '} */}
          {/* <code>audio</code> */}
          {/* . */}
        </audio>
        { trackName }
      </li>
    </ul>
    <label htmlFor="favSong">
      Favoritar
      <input
        onChange={ handleSavedSongs }
        checked={ teste.includes(trackId.toString()) }
        type="checkbox"
        name={ trackId }
      />
    </label>
  </div>
  );
}