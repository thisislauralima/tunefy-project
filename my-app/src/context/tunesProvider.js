import React from 'react';
import PropTypes from 'prop-types';
import tunesContext from './tunesContext';

function tunesProvider({ children }) {
  return (
    <tunesContext.Provider>
      {children}
    </tunesContext.Provider>
  )
}

export default tunesProvider;

tunesProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;