import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusicById from '../../services/getMusicById';
import SongCard from '../SongCard/SongCard';

export default function ClickedAlbum () {
  const [songs, setSongs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const music = await getMusicById(id);
      setSongs(music.splice(1));
    }
    fetchData();
  }, [setSongs, id]);

  return (
    <main>
      <img src={ localStorage.getItem('albumImage') } alt="album" />
      {
        songs.map((el) => (
          <div key={el.trackId}>
            <SongCard
              trackId={ el.trackId }
              previewUrl={ el.previewUrl }
              trackName={ el.trackName }
            />
          </div>
        ))
      }
    </main>
  )
}