import React              from 'react';
import { browserHistory } from 'react-router';
import { Link }           from 'react-router-dom';


import Button             from '../Button/Button';
import './books.css'


const Books = ({ amazon, title, detail, isbn, genre}) => {

    return (
      <div className="book-card">
        <img className='book-cover'
          src={`http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`}
          width='120'
          height='200'
        />
        <p className="book-title">{title}</p>
        <a className='amazon-link'
          href={amazon}
          target='_blank'>
          Find on Amazon
        </a>
        <Link className='link' to='/favorites'>
        <Button name='&#9829;'
          className='favorites-btn'/>
        </Link>

      </div>
    )
}

export default Books;
