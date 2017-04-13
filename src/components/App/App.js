import React, { Component } from 'react';
import { Route }                from 'react-router-dom';
import { Link }                 from 'react-router-dom';
import $ from 'jquery'


import './App.css';

class App extends Component {

  componentDidMount() {
    let bookRequest =('https://api.nytimes.com/svc/books/v3/lists.json')
    bookRequest  += '?' + $.param({
      'api-key': "d7d1e070d64347eda225f068e97c8d21",
      'list': 'hardcover-fiction'
    })
    fetch(bookRequest).then(response =>  response.json())
    .then(json => {
      let books = json.results
      this.props.addBooks(books)
    })
  }

  render() {
    return (
      <div className="App">
        <div className='header-area'>
          <h1 className='app-title'>Book Hour</h1>
        </div>
      </div>
    );
  }
}

export default App;
