import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusicById from '../../services/getMusicById';

export default function ClickedAlbum () {
  const [song, setSong] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const music = await getMusicById(id);
      console.log('song', music)
      setSong(music);
    }
    fetchData();
  }, []);

  return (
    // song.map((el) => {
    <div>oi</div>
    // })
  )
}