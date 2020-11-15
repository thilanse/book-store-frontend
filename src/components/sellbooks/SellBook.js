import React, { Component } from "react";
import AddBook from "./AddBook";
import Books from "./Books";
import axios from "axios";


export class SellBook extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/books")
      .then((res) => this.setState({ books: res.data }));
  }

  // Adds new book
  addNewBook = (book) => {
    axios
      .post("http://localhost:8080/books", {
        name: book.name,
        author: book.author,
        price: book.price,
        sold: false,
      })
      .then((res) => this.setState({ books: [...this.state.books, res.data] }));
  };

  // Deletes a book
  deleteBook = (id) => {
    axios.delete(`http://localhost:8080/books/${id}`).then((res) => {
      this.setState({
        books: [...this.state.books.filter((book) => book.id !== id)],
      });

      // Todo: Implement a proper method to notify the user of the deletion
      console.log(res.data.name + " was deleted.");
    });
  };

  render() {
    return (
      <div>
        <AddBook addNewBook={this.addNewBook} />
        <br />
        <Books books={this.state.books} deleteBook={this.deleteBook} />
      </div>
    );
  }
}

export default SellBook;
