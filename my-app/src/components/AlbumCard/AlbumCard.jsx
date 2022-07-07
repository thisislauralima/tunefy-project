import React from 'react';
import './albumCard.css';

export default function AlbumCard({ info }) {

  const getImage = () => {
    localStorage.setItem('albumImage', info.artworkUrl100);
  }

  return (
    <div id="album" onClick={ getImage }>
      <img src={ info.artworkUrl100 } alt='artist-pic' />
      <div id="albumText">
        <div className="alignText">
          <span id="artist">{ info.artistName }</span>
        </div>
        <div className="alignText">
          <span id="albumName">{ info.collectionName }</span>
        </div>
      </div>
    </div>
  );
}