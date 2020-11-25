import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import axios from "axios";

class Signup extends Component {

    state = {
        username: '',
        email: '',
        password: ''
    }

    componentWillUnmount() {
        this.setState = (state,callback)=>{
            return
        };
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = event => {
        event.preventDefault();

        if (this.state.username === '' || this.state.password === '' || this.state.email === '') {
            return
        }

        console.log(this.state);

        axios.post("/signup", this.state)
            .then(res => {
                console.log(res.data)
                this.setState({
                    username: '',
                    email: '',
                    password: ''
                })
            })
            .catch(err => console.log(err));

        this.props.history.push("/login");
    }

    render() {
        return (
            <div style={loginFormStyle}>
                <form onSubmit={this.onSubmit}>
                    <h2>Register</h2>
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
                        <label htmlFor="emailInput">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="emailInput"
                            name="email"
                            value={this.state.email}
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
                    <button type="submit" className="btn btn-primary">Signup</button>
                    <Link className="btn btn-secondary ml-2" to="/login">Login</Link>
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

export default withRouter(Signup);
