import React, {Component} from 'react';
import SearchBar from "../search/SearchBar";
import {Link} from 'react-router-dom';

class Header extends Component {

    render() {

        let loginLinks;

        if (localStorage.getItem("token") !== null)
        {
            loginLinks = (
                <ul className="navbar-nav col-auto mt-2 mt-lg-0 ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" onClick={() => localStorage.clear()}>Logout</Link>
                    </li>
                </ul>
            )
        }
        else
        {
            loginLinks = (
                <ul className="navbar-nav col-auto mt-2 mt-lg-0 ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                </ul>
            )
        }

        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Book Store</Link>
                    <div className="collapse navbar-collapse row" id="navbarTogglerDemo02">
                        <div className="col-6 ml-auto">
                            <SearchBar performSearch={this.props.performSearch}/>
                        </div>
                        {loginLinks}
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;

