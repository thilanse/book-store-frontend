import React, {useEffect, useState} from 'react';
import SearchBar from "../search/SearchBar";
import {Link} from 'react-router-dom';
import axios from "axios";


export default function Header({performSearch}) {
    const [username, setUsername] = useState(null);

    const logout = () => {
        localStorage.clear();
        setUsername(null);
    }

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token !== null) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            axios.get("/user", config)
                .then(res => {
                    setUsername(res.data.username);
                })
                .catch(err => {
                    // if token expired, logout user
                    if(err.response.status === 403)
                    {
                        logout();
                    }
                });
        }
    }, []);

    return (
        <header style={{marginBottom: '20px'}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Book Store</Link>
                <div className="collapse navbar-collapse row" id="navbarTogglerDemo02">
                    <div className="col-6 ml-auto">
                        <SearchBar performSearch={performSearch}/>
                    </div>
                    { username == null ? (
                        <ul className="navbar-nav col-auto mt-2 mt-lg-0 ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav col-auto mt-2 mt-lg-0 ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">{username}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={() => logout()}>Logout</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    )
}