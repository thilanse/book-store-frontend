import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import axios from "axios";

const loginFormStyle = {
    width: '450px',
    padding: '20px',
    margin: '30px auto'
}

export default function Login() {
    let history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const onSubmit = (event) => {
        event.preventDefault();

        if(username === '' || password === '') return

        const requestBody = {
            username: username,
            password: password
        }

        axios.post("/authenticate", requestBody)
            .then(res => {
                localStorage.setItem("token", res.data.jwt);
                history.push('/');
            })
            .catch(err => {
                setUsername('');
                setPassword('');
                if(err.response.status === 403)
                {
                    setErrorMessage("Incorrect username and password")
                }
            });
    }

    return (
        <div style={loginFormStyle}>
            <form onSubmit={(e) => onSubmit(e)}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="usernameInput">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="usernameInput"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="passwordInput"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <p style={{color: 'red'}}>{errorMessage}</p>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <Link className="btn btn-secondary ml-2" to="/signup">Signup</Link>
                <Link className="btn btn-secondary ml-2" to="/">Back to Home Page</Link>
            </form>
        </div>
    )
}