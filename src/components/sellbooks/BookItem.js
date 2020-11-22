import React, {Component} from "react";
import PropTypes from "prop-types";

class BookItem extends Component {
    render() {
        const {id, name, author, price} = this.props.book;
        return (
            // <div style={bookItemStyle}>
            //     <p>{name}</p>
            //     <p style={{fontSize: "14px", marginTop: "5px"}}>{author}</p>
            //     <p style={{marginTop: "10px"}}>Rs. {price}</p>
            //     <button
            //         style={deleteButtonStyle}
            //         onClick={this.props.deleteBook.bind(this, id)}
            //     >
            //         Delete
            //     </button>
            // </div>

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

const deleteButtonStyle = {
    marginTop: "10px",
    padding: "5px",
    color: "red",
    border: "1px red solid",
    cursor: "pointer",
};

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
