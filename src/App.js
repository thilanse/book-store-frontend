import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Search from "./components/search/Search";
import SellBook from "./components/sellbooks/SellBook";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Route exact path="/" component={Search}/>
                    <Route path="/sell" component={SellBook}/>
                </div>
            </Router>
        );
    }
}

export default App;
