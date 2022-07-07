import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SearchArtist from '../../components/SearchArtist/SearchArtist';
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import tunesContext from '../../context/tunesContext';

export default function Search() {
  const { displaySearch, search } = useContext(tunesContext);
  return (
    <>
      <Header />
      <SearchArtist />
      {
        displaySearch &&
          <main>
            {
              search.length ? search.map((el) => (
                <div key={ el.collectionId }>
                  <Link to={ `/album/${ el.collectionId }` }>
                    <AlbumCard
                      info={ el }
                      // image={ artworkUrl100 }
                      // albumName={ collectionName }
                    />
                  </Link>
                </div>
              )) : <p>Nenhum álbum foi encontrado</p>
            }
          </main>
      }
    </>
  );
}
