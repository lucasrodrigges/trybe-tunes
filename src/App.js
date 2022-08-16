import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Loading from './components/Loading';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';
import './css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/trybe-tunes/"
          component={ (props) => (
            <Login
              { ...props }
            />) }
        />
        <Route exact path="/trybe-tunes/search" component={ Search } />
        <Route
          exact
          path="/trybe-tunes/album/:id"
          component={ (props) => <Album { ...props } /> }
        />
        <Route exact path="/trybe-tunes/favorites" component={ Favorites } />
        <Route exact path="/trybe-tunes/profile" component={ Profile } />
        <Route
          exact
          path="/trybe-tunes/profile/edit"
          component={ (props) => <ProfileEdit { ...props } /> }
        />
        <Route exact path="/trybe-tunes/loading" component={ Loading } />
        <Route path="/trybe-tunes/:id" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
