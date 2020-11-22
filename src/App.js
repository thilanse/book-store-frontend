import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

class App extends Component {

    state = {
        currentUser: {
            username: '',
            email: ''
        }
    };

    setCurrentUser = (data) => {
        // console.log(data);
        const userDetails = {
            username: data.username,
            email: data.email
        }

        this.setState({currentUser: userDetails})
        console.log(this.state);
    }

    render() {

        return (
            <Router>
                <div className="App">
                    <Route exact path="/" render={() => (
                        <Home username={this.state.currentUser.username}/>
                    )}/>
                    <Route path="/home" render={() => (
                        <Home username={this.state.currentUser.username}/>
                    )}/>
                    <Route path="/login" render={() => (
                        <Login setCurrentUser={this.setCurrentUser}/>
                    )}/>
                    <Route path="/signup" component={Signup}/>
                </div>
            </Router>
        );
    }
}

export default App;
