import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, useHistory} from "react-router-dom";
import Navigation from "./layout/Navigation";
import MainContent from "./layout/MainContent";
import axios from "axios";
import SellBook from "./sellbooks/SellBook";
import BookPurchase from "./purchase/BookPurchase";
import SearchResults from "./search/SearchResults";


export default function Home({results}) {
    const history = useHistory();

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <Navigation/>
                    </div>
                    <div className="col-10" style={{paddingLeft: '50px'}}>
                        <Router>
                            <div className="App">
                                <Route exact path="/" render={() => (
                                    <MainContent />
                                )}/>
                                <Route exact path="/results" render={() => (
                                    <SearchResults results={results}/>
                                )}/>
                                <Route path="/home/sell" render={() => (
                                    <SellBook/>
                                )}/>
                                <Route path="/home/purchase" render={() => (
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
