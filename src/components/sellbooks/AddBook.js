import React, { Component } from "react";
import PropTypes from "prop-types";

class AddBook extends Component {
  state = {
    name: "",
    author: "",
    price: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Sends the new book object to parent App component
  onSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.name === "" ||
      this.state.author === "" ||
      this.state.price === ""
    ) {
      return;
    }

    this.props.addNewBook(this.state);
    this.setState({
      name: "",
      author: "",
      price: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Book Title:</label>
        <input
          type="input"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
        />

        <label>Book Author:</label>
        <input
          type="input"
          name="author"
          value={this.state.author}
          onChange={this.onChange}
        />

        <label>Book Price:</label>
        <input
          type="input"
          name="price"
          value={this.state.price}
          onChange={this.onChange}
        />

        <input type="submit" value="Add Book" />
      </form>
    );
  }
}

// PropTypes
AddBook.propType = {
  addNewBook: PropTypes.func.isRequired
};

export default AddBook;
