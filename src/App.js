import React from 'react';
import './App.css';
import './component/style/custom.css'
import { Router, Route, Switch } from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from './component/NotFoundPage/NotFoundPage';
import LoginPage from './component/LoginPage/LoginPage';
import ActorPage from './component/ActorPage/ActorPage';
import MoviePage from './component/MoviePage/MoviePage';
import FavouritesPage from './component/HomePage/Favourites/FavouritesPage';
export const history = createHistory();
class App extends React.Component {
  render() {
    return (
    <Router history={history}>  
     <div className="App">
     <Switch>
       <Route path="/" component={HomePage}  exact={true}/>
       <Route path="/movie/:id" component={MoviePage} />
       <Route path="/login" component={LoginPage} />
       <Route path="/actor/:id" component={ActorPage} /> 
       <Route path="/favourites" component={FavouritesPage} />
       <Route component={NotFoundPage} />
      </Switch> 
      </div>
      </Router>
    );
  }
}

export default App;
