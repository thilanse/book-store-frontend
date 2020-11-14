import React, { Component } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import Books from "./components/Books";
import axios from "axios";

class App extends Component {
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

  render() {
    return (
      <div className="App">
        <h1>Book Store</h1>
        <AddBook addNewBook={this.addNewBook} />
        <br />
        <Books books={this.state.books} />
      </div>
    );
  }
}

export default App;
