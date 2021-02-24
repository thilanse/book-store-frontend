import React, {Component, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/layout/Header";
import axios from "axios";

export default function App() {

    const [results, setResults] = useState([]);


    const performSearch = (query) => {
        console.log(query);
        axios
            .get(`/search?query=${query}`)
            .then(res => {
                setResults(res.data.json);
            }).then(console.log(results));
    }

    return (
        <Router>
            <div className="App">
                <Header performSearch={performSearch}/>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Home results={results}/>
                    )}/>
                    <Route exact path="/home" render={() => (
                        <Home results={results}/>
                    )}/>
                    <Route path="/login" render={() => (
                        <Login />
                    )}/>
                    <Route path="/signup" component={Signup}/>
                </Switch>
            </div>
        </Router>
    );
}
