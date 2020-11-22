import React, {Component} from 'react'
import SearchItem from "./../search/SearchItem";

class MainContent extends Component {

    render() {
        return this.props.results.map(result => (
            <SearchItem key={result.id} result={result}/>
        ));
    }
}

export default MainContent;
