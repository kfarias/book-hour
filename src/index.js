import React, { Component } from 'react';
import { render } from 'react-dom';

/******** store ********/
import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';

/******** router ********/
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

// import ReactDOM from 'react-dom';
// import thunk from 'redux-thunk';

// import App from '../components/App/App';
/******** files ********/
import App from '../src/components/App/App'
import { books } from './reducers/reducers';


/******** css ********/
import '../src/components/App/reset.css'
import './index.css';

const history = createHistory();
const middleware = routerMiddleware(history)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// const middleware = [routerMiddleware(history), thunk]
const root = combineReducers({
  books,
  router: routerReducer
})

const store = createStore(root, devTools, applyMiddleware(middleware))

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route to="/" component={App}/>
  </ConnectedRouter>
  </Provider>
);


render(router, document.getElementById('root'))
