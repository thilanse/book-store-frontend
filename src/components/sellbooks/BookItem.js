import React, {Component} from "react";
import PropTypes from "prop-types";

class BookItem extends Component {
    render() {
        const {id, name, author, price} = this.props.book;
        return (
            <div className="card text-center" style={bookItemStyle}>
                <div className="card-body">
                    <p className="card-title" style={{fontSize: '15px'}}>{name}</p>
                    <p className="card-text">{author}</p>
                    <p className="card-text">{price}</p>
                    <button className="btn btn-danger" onClick={this.props.deleteBook.bind(this, id)}>Delete</button>
                </div>
            </div>
        );
    }
}

const bookItemStyle = {
    width: '14rem',
    float: "left",
    height: "250px",
    margin: '5px'
};

BookItem.propTypes = {
    book: PropTypes.object.isRequired,
    deleteBook: PropTypes.func.isRequired,
};

export default BookItem;
