import React, { useState } from 'react';
import PropTypes from 'prop-types';
import tunesContext from './tunesContext';

function TunesProvider({ children }) {
  const [searchedArtist, setSearchedArtist] = useState('');
  
  const values = {
    searchedArtist,
    setSearchedArtist,
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