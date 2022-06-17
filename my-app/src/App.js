import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pages from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ pages.Login } />
      <Route exact path="/search" component={ pages.Search } />
      <Route exact path="/album/:id" component={ pages.Album } />
      <Route exact path="/favorites" component={ pages.Favorites } />
      <Route exact path="/profile" component={ pages.Profile } />
      <Route exact path="/profile/edit" component={ pages.ProfileEdit } />
      <Route exact path="*" component={ pages.NotFound } />
    </Switch>
  );
}

export default App;
