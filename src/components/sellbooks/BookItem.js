import React, { Component } from "react";
import PropTypes from "prop-types";

class BookItem extends Component {
  render() {
    const { id, name, author, price } = this.props.book;
    return (
      <div style={bookItemStyle}>
        <p>{name}</p>
        <p style={{ fontSize: "14px", marginTop: "5px" }}>{author}</p>
        <p style={{ marginTop: "10px" }}>Rs. {price}</p>
        <button
          style={deleteButtonStyle}
          onClick={this.props.deleteBook.bind(this, id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

const deleteButtonStyle = {
  marginTop: "10px",
  padding: "5px",
  color: "red",
  border: "1px red solid",
  cursor: "pointer",
};

const bookItemStyle = {
  border: "1px black solid",
  padding: "5px",
  width: "200px",
  textAlign: "center",
  margin: "10px",
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookItem;
