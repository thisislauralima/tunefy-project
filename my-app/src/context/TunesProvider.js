import React, { useState } from 'react';
import PropTypes from 'prop-types';
import tunesContext from './tunesContext';

function TunesProvider({ children }) {
  const [albumsResult, setAlbumsResult] = useState(false);
  const [search, setSearch] = useState([]);
  const [displaySearch, setDisplaySearch] = useState(false);

  const values = {
    albumsResult,
    setAlbumsResult,
    search,
    setSearch,
    displaySearch,
    setDisplaySearch,
  }
  return (
    <tunesContext.Provider value={ values }>
      { children }
    </tunesContext.Provider>
  )
}

export default TunesProvider;

TunesProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;