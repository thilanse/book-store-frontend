import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/layout/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                </div>
            </Router>
        );
    }
}

export default App;
