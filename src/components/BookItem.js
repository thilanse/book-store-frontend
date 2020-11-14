import React, { Component } from "react";
import PropTypes from "prop-types";

class BookItem extends Component {
  render() {
    const { name, author, price } = this.props.book;
    return (
      <div style={bookItemStyle}>
        <p>{name}</p>
        <p style={{ fontSize: '14px', marginTop: '5px' }}>{author}</p>
        <p style={{marginTop: '10px'}}>Rs. {price}</p>
      </div>
    );
  }
}

const bookItemStyle = {
  border: "1px black solid",
  padding: "5px",
  width: "200px",
  textAlign: "center",
  margin: "10px",
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookItem;
