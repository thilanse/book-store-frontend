import React, {Component} from 'react'
import SearchItem from "./SearchItem";

class SearchResults extends Component {

    render() {
        return this.props.results.map(result => (
            <SearchItem key={result.id} result={result}/>
        ));
    }
}

export default SearchResults;
