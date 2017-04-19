import React, { Component } from 'react';
import { Route }            from 'react-router-dom';
import { Link }             from 'react-router-dom';

import Button               from '../Button/Button';
import FictionContainer     from '../Fiction/FictionContainer';
import NonFictionContainer  from '../NonFiction/NonFictionContainer';
import YoungAdultContainer  from '../YoungAdult/YoungAdultContainer';
import SportsContainer      from '../Sports/SportsContainer';
import FavoritesContainer   from '../Favorites/FavoritesContainer';
import WelcomeContainer     from '../Welcome/WelcomeContainer';

import './App.css';


class App extends Component {

  render() {
    const { history } = this.props

    return (
      <div className="App">
        <Link className='link' to='/'>
          <h1 className='app-title'>Bookin' It</h1>
        </Link>

      <div className='card-container'>
      <Route
        exact path='/'
        render={() => <WelcomeContainer/>}/>
        <Route
          exact path='/fiction'
          render={ () => <FictionContainer/>}/>
          <Route
            exact path='/nonfiction'
            render={() => <NonFictionContainer/>}/>
            <Route
              exact path='/youngadult'
              render={() => <YoungAdultContainer/>}/>
              <Route
                exact path='/sports'
                render={() => <SportsContainer/>}/>
                <Route
                  exact path='/favorites'
                  render={() => <FavoritesContainer/>}/>
                </div>
                  <footer className='footer-container'>
                    <a href='http://developer.nytimes.com'
                       target='blank'><img
                       className='nyt-logo'
                       src={'../../images/nyt-logo.png'}/>
                    </a>
                    <Link className='link' to='/favorites'>
                    <Button name='&#9829;'
                      className='favorites-btn'
                      onClick={() => console.log('hi')}/>
                    </Link>
                  </footer>
              </div>
            );
          };
        };

        export default App;
