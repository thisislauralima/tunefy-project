import React, { useState, useContext } from 'react';
import searchAlbumsAPI from '../../services/searchAlbum';
import tunesContext from '../../context/tunesContext';

export default function SearchArtist() {
  const {
    albumsResult,
    setAlbumsResult,
    setSearch,
    setDisplaySearch
  } = useContext(tunesContext);

  const [searchedArtistInput, setSearchedArtistInput] = useState('');
  
  const searchArtist = async () => {
    const albums = await searchAlbumsAPI(searchedArtistInput);
    setSearch(albums);
    setSearchedArtistInput('');
    setAlbumsResult(true);
    setDisplaySearch(true);
  }

  return (
    <div>
      <input
        type="text"
        onChange={ ({ target: { value }}) => {
          setSearchedArtistInput(value);
        }}
        value={ searchedArtistInput }
      />
      <button
        type="button"
        disabled={ searchedArtistInput.length < 2 ? true : false }
        onClick={ searchArtist }
      >
        pesquisar
      </button>
      {
        albumsResult && <span>Resultados encontrados para sua busca:</span>
      }
    </div>
  );
}