import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div className="list-group" style={linkStyle}>
            <Link className="list-group-item list-group-item-action" to="/">Home</Link>
            <Link className="list-group-item list-group-item-action" to="/home/sell">Sell a book</Link>
            <Link className="list-group-item list-group-item-action" to="/">Purchased Books</Link>
            <Link className="list-group-item list-group-item-action" to="/">Trending</Link>
        </div>
    )
}

const linkStyle = {
    width: "15rem"
}

const navStyle = {}

export default Navigation;

