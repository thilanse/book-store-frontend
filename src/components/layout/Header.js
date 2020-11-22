import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Book Store</h1>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/sell">Sell a book</Link>
            <Link style={linkStyle} to="/login">Login</Link>
        </header>
    )
}

const linkStyle = {
    marginRight: "10px"
}

const headerStyle = {}

export default Header

