import React, {Component} from "react";
import AddBook from "./AddBook";
import Books from "./Books";
import axios from "axios";


export class SellBook extends Component {
    state = {
        books: [],
    };

    componentDidMount() {

        const token = localStorage.getItem("token");

        if (token !== null) {

            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }

            axios
                .get("/books", config)
                .then((res) => this.setState({books: res.data}))
                .catch(err => console.log(err));
        }
    }

    // Adds new book
    addNewBook = (book) => {
        const token = localStorage.getItem("token");

        if (token !== null) {
            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }

            axios
                .post("/books", {
                    name: book.name,
                    author: book.author,
                    price: book.price,
                    sold: false,
                }, config)
                .then((res) => this.setState({books: [...this.state.books, res.data]}));
        }
    };

    // Deletes a book
    deleteBook = (id) => {

        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }

        axios.delete(`/books/${id}`, config).then((res) => {
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
                <div style={addNewBookStyle}>
                    <h4>To sell a book, add the book details here:</h4>
                    <AddBook addNewBook={this.addNewBook}/>
                </div>

                <div style={booksContainerStyle}>
                    <Books books={this.state.books} deleteBook={this.deleteBook}/>
                </div>
            </div>
        );
    }
}

const addNewBookStyle = {
    padding: '20px',
    marginBottom: '20px'
}

const booksContainerStyle = {
    width: '950px',
    minHeight: '1000px',
    margin: 'auto',
    padding: 'auto'
}


export default SellBook;
