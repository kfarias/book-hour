import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import Button               from '../Button/Button.js';
import Books                from '../Books/Books';
import $                    from 'jquery';



export default class Welcome extends Component {

  updateListFetch(list, e) {
    let bookRequest =('https://api.nytimes.com/svc/books/v3/lists.json')
    bookRequest += '?' + $.param({
      'api-key': "d7d1e070d64347eda225f068e97c8d21",
      'list': list
    })
    fetch(bookRequest).then((response) => {
      return response.json()
    }).then((json) => {
      let books = json.results
      this.props.addBooks(books)
    })
    this.toggleListButton();
    e.target.classList.add('button-clicked');
  };


  toggleListButton() {
    const button = document.getElementsByClassName('button');
    let i
    for(i = 0; i < button.length; i++) {
      button[i].classList.remove('button-clicked')
    };
  };

  render() {
    const { books } = this.props

    return(
      <div className='button-wrapper'>
        <Link className='link' to='/fiction'>
          <Button name='Fiction'
                  className='button'
                  onClick={ (e)=> this.updateListFetch('hardcover-fiction', e) }/>
        </Link>

        <Link className='link' to='/nonfiction'>
          <Button name='Non Fiction'
                  className='button'
                  onClick={ (e)=> this.updateListFetch('hardcover-nonfiction', e) }/>
        </Link>

        <Link className='link' to='/youngadult'>
          <Button name='Young Adult'
                  className='button'
                  onClick={ (e)=> this.updateListFetch('young-adult', e) }/>
        </Link>

        <Link className='link' to='/sports'>
          <Button name='Sports'
                  className='button'
                  onClick={ (e)=> this.updateListFetch('sports', e) }/>
        </Link>
      </div>
    );
  };
};
