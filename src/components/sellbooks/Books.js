import React, { Component } from "react";
import PropTypes from "prop-types";
import BookItem from "./BookItem";

class Books extends Component {
  render() {
    return this.props.books.map((book) => (
      <BookItem
        key={book.id}
        book={book}
        deleteBook={this.props.deleteBook}
      />
    ));
  }
}

// PropTypes
Books.propType = {
  books: PropTypes.array.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Books;
