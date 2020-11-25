import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, useHistory} from "react-router-dom";
import axios from 'axios';
import SearchResults from "../search/SearchResults";

function ShowCaseItem({book, performPurchase}) {

    return (
        <div className="card text-center" style={bookItemStyle}>
            <div className="card-body">
                <p className="card-title" style={{fontSize: '15px'}}>{book.name}</p>
                <p className="card-text">{book.author}</p>
                <p className="card-text">{book.price}</p>
                <button className="btn btn-info" onClick={() => performPurchase(book.id)}>Buy</button>
            </div>
        </div>
    )
}

function Recommendations({books, loading, performPurchase}) {
    return loading ? (
        <div>
            <p>Loading results...</p>
        </div>
    ) : (
        <div>
            {books.map(book =>
                <ShowCaseItem
                    key={book.id}
                    book={book}
                    performPurchase={performPurchase}
                />
            )}
        </div>
    )
}

function MainContent({results}) {
    let history = useHistory();
    let [books, setBooks] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("/recommendations")
            .then(res => {
                setBooks(res.data);
                setLoading(false);
            });
    }, []);

    const performPurchase = (id) => {
        console.log(id);
    }

    return (
        <Recommendations
            books={books}
            loading={loading}
            performPurchase={performPurchase}
        />
    )
}

const bookItemStyle = {
    width: '14rem',
    float: "left",
    height: "250px",
    margin: '5px'
};

export default MainContent;
