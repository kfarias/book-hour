import React, { Component } from 'react';
import Books                from '../Books/Books.js';

export default class Sports extends Component {

  render() {
    const { books } = this.props;

    return(
      <div>
        {books.map((book, i) => {
            return <Books
              amazon={book.amazon_product_url}
              title={book.book_details[0].title}
              detail={book.book_details[0].description}
              isbn={book.book_details[0].primary_isbn10}
              genre={book.display_name}
              key={i}
            />
        })}
      </div>
    );
  };
};
