import React, { Component } from 'react';
import { render }           from 'react-dom';

/******** store ********/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware }               from 'react-router-redux';
import createHistory                                     from 'history/createBrowserHistory';

/******** router ********/
import { ConnectedRouter } from 'react-router-redux';
import { Provider }        from 'react-redux';
import { Route }           from 'react-router-dom';

/******** files ********/
import AppContainer from '../src/components/App/AppContainer'
import { books }    from './reducers/reducers';

/******** css ********/
import '../src/components/App/reset.css'
import './index.css';

const history = createHistory();
const middleware = routerMiddleware(history);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const root = combineReducers({
  books,
  router: routerReducer
});

const store = createStore(root, devTools, applyMiddleware(middleware));

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route to="/" component={AppContainer}/>
    </ConnectedRouter>
  </Provider>
);


render(router, document.getElementById('root'));
