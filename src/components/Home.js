import React, {Component} from 'react'
import Header from "./layout/Header";
import Navigation from "./layout/Navigation";
import MainContent from "./layout/MainContent";
import axios from "axios";

class Home extends Component {

    state = {
        searchResults: []
    }

    performSearch = (query) => {
        const token = localStorage.getItem("token")

        if(token !== null)
        {
            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            axios
                .get(`/search?query=${query}`, config)
                .then(res => this.setState({searchResults: res.data}))
        }
    }

    render() {
        return (
            <div>
                <Header performSearch={this.performSearch}/>
                <div>
                    <Navigation />
                </div>
                <div>
                    <MainContent results={this.state.searchResults}/>
                </div>
            </div>
        )
    }
}

export default Home;
