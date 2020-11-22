import React, {Component} from "react";
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
            <form onSubmit={this.onSubmit} style={formStyle}>
                <div style={formInputStyle}>
                    <label>Book Title</label>
                    <input
                        type="input"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                </div>

                <div style={formInputStyle}>
                    <label>Book Author</label>
                    <input
                        type="input"
                        name="author"
                        value={this.state.author}
                        onChange={this.onChange}
                    />
                </div>

                <div style={formInputStyle}>
                    <label>Book Price</label>
                    <input
                        type="input"
                        name="price"
                        value={this.state.price}
                        onChange={this.onChange}
                    />
                </div>

                <div style={formInputStyle}>
                    <input type="submit" value="Add Book"/>
                </div>
            </form>
        );
    }
}

const formStyle = {
    marginLeft: "10px",
    width: "200px"
}

const formInputStyle = {
    float: "left",
    marginBottom: "5px"
}

// PropTypes
AddBook.propType = {
    addNewBook: PropTypes.func.isRequired
};

export default AddBook;
