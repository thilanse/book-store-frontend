import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

class Books extends Component {
  render() {
    return this.props.books.map(book => (
      <BookItem key={book.bookId} book={book} />
    ));
  }
}

// PropTypes
Books.propType = {
  books: PropTypes.array.isRequired
}

export default Books
