import React, {Component} from 'react'

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

        const requestBody = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post("/authenticate", requestBody)
            .then(res => {
                localStorage.setItem("token", res.data.jwt);
                this.setState({
                    username: '',
                    password: ''
                })
            })
            .catch(err => console.log(err));


    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div style={formStyle}>
                        <div style={formInputStyle}>
                            <label>Username</label>
                            <input
                                type="input"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChange}
                            />
                        </div>

                        <div style={formInputStyle}>
                            <label>Password</label>
                            <input
                                type="input"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                        </div>

                        <div style={formInputStyle}>
                            <input type="submit" value="Login"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const formStyle = {
    marginLeft: "10px",
    width: "200px"
}

const formInputStyle = {
    float: "left",
    marginBottom: "5px"
}

export default Login;
