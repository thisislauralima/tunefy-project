import React from 'react';

export default function AlbumCard({ info }) {

  const getImage = () => {
    localStorage.setItem('albumImage', info.artworkUrl100);
  }

  return (
    <div onClick={ getImage }>
      <span>{ info.artistName }</span>
      <span>{ info.collectionName }</span>
      <img src={ info.artworkUrl100 } alt='artist-pic' />
    </div>
  );
}