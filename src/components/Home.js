import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, useHistory} from "react-router-dom";
import Header from "./layout/Header";
import Navigation from "./layout/Navigation";
import MainContent from "./layout/MainContent";
import axios from "axios";
import SellBook from "./sellbooks/SellBook";
import BookPurchase from "./purchase/BookPurchase";
import SearchResults from "./search/SearchResults";


export default function Home() {
    const history = useHistory();
    const [results, setResults] = useState([]);

    const performSearch = (query) => {

        axios
            .get(`/search?query=${query}`)
            .then(res => {
                setResults(res.data);
                history.push('/home');
            });
    }

    return (
        <div>
            <Header performSearch={performSearch}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <Navigation/>
                    </div>
                    <div className="col-10" style={{paddingLeft: '50px'}}>
                        <Router>
                            <div className="App">
                                <Route exact path="/" render={() => (
                                    <MainContent results={results}/>
                                )}/>
                                <Route exact path="/home" render={() => (
                                    <MainContent results={results}/>
                                )}/>
                                <Route exact path="/home/sell" render={() => (
                                    <SellBook/>
                                )}/>
                                <Route exact path="/home/purchase" render={() => (
                                    <BookPurchase/>
                                )}/>
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    )
}
