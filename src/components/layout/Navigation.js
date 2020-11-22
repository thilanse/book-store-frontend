import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div style={navStyle}>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/sell">Sell a book</Link>
            <Link style={linkStyle} to="/login">Login</Link>
            <Link style={linkStyle} to="/signup">Signup</Link>
        </div>
    )
}

const linkStyle = {
    marginRight: "10px"
}

const navStyle = {}

export default Navigation;

