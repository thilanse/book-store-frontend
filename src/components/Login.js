import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import axios from "axios";

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = event => {
        event.preventDefault();

        if (this.state.username === '' || this.state.password === '') {
            return
        }

        axios.post("/authenticate", this.state)
            .then(res => {
                localStorage.setItem("token", res.data.jwt);
                this.setState({
                    username: '',
                    password: ''
                });
                // console.log(res.data.userDetails);
                this.props.setCurrentUser(res.data.userDetails);
            })
            .catch(err => console.log(err));


    }

    render() {
        return (
            <div style={loginFormStyle}>
                <form onSubmit={this.onSubmit}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="usernameInput"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="passwordInput"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <Link className="btn btn-secondary ml-2" to="/signup">Signup</Link>
                    <Link className="btn btn-secondary ml-2" to="/">Back to Home Page</Link>
                </form>
            </div>
        )
    }
}

const loginFormStyle = {
    width: '450px',
    padding: '20px',
    margin: '30px auto'
}

export default Login;
