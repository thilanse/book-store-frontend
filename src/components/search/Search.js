import React, {Component} from 'react'
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import axios from "axios";

class Search extends Component {

    state = {
        searchResults: []
    }

    performSearch = (query) => {
        axios
            .get(`http://localhost:8080/search?query=${query}`)
            .then(res => this.setState({searchResults: res.data}))
    }

    render() {
        return (
            <div>
                <SearchBar performSearch={this.performSearch}/>
                <div>
                    <SearchResults results={this.state.searchResults} />
                </div>
            </div>
        )
    }
}

export default Search
