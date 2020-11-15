import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Book Store</h1>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/sell"> Sell a book</Link>
    </header>
  )
}

const linkStyle = {

}

const headerStyle = {

}

export default Header

