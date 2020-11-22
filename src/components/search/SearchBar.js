import React, {Component} from 'react';
import PropTypes from "prop-types";

class SearchBar extends Component {

    state = {
        searchQuery: ''
    }

    onChange = (e) => {
        this.setState({searchQuery: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        // Do nothing if search query is empty
        if (this.state.searchQuery === '') return;

        this.props.performSearch(this.state.searchQuery);

        this.setState({searchQuery: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="searchQuery" value={this.state.searchQuery} onChange={this.onChange}/>
                <input type="submit" value="Search" />
            </form>
        )
    }
}

SearchBar.propTypes = {
    performSearch: PropTypes.func.isRequired,
};

export default SearchBar;
