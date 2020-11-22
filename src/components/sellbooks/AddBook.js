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
            <form onSubmit={this.onSubmit}>
                <div className="form-row">
                    <div className="col-4">
                        <input type="text"
                               className="form-control"
                               placeholder="Book name"
                               name="name"
                               value={this.state.name}
                               onChange={this.onChange}/>
                    </div>
                    <div className="col-4">
                        <input type="text"
                               className="form-control"
                               placeholder="Author"
                               name="author"
                               value={this.state.author}
                               onChange={this.onChange}/>
                    </div>
                    <div className="col-3">
                        <input type="text"
                               className="form-control"
                               placeholder="Price"
                               name="price"
                               value={this.state.price}
                               onChange={this.onChange}/>
                    </div>
                    <div className="col-1">
                        <input type="submit"
                               className="btn btn-info"
                               value="Add Book"/>
                    </div>
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
