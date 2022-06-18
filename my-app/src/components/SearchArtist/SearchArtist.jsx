import React, { useContext } from 'react';
import tunesContext from '../../context/tunesContext';

export default function SearchArtist() {
  const {
    searchedArtist,
    setSearchedArtist,
  } = useContext(tunesContext);

  return (
    <div>
      <input type="text" onChange={ ({ target: { value }}) => {
        setSearchedArtist(value);
      }}/>
      <button
        type="button"
        disabled={ searchedArtist.length < 2 ? true : false }
      >pesquisar</button>
    </div>
  );
}