import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./layout/Header";
import Navigation from "./layout/Navigation";
import MainContent from "./layout/MainContent";
import axios from "axios";
import SellBook from "./sellbooks/SellBook";

class Home extends Component {

    state = {
        searchResults: []
    }

    performSearch = (query) => {

        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }

        axios
            .get(`/search?query=${query}`, config)
            .then(res => this.setState({searchResults: res.data}))
    }

    render() {
        return (
            <div>
                <Header performSearch={this.performSearch}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <Navigation/>
                        </div>
                        <div className="col-10" style={{paddingLeft: '50px'}}>
                            <Router>
                                <div className="App">
                                    <Route exact path="/" render={() => (
                                        <MainContent results={this.state.searchResults}/>
                                    )}/>
                                    <Route exact path="/home/" render={() => (
                                        <MainContent results={this.state.searchResults}/>
                                    )}/>
                                    <Route exact path="/home/sell" component={SellBook}/>
                                </div>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
