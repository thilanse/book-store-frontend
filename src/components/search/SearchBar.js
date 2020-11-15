import React, {Component} from 'react'

class SearchBar extends Component {

    state = {
        searchQuery: ''
    }

    onChange = (e) => {
        this.setState({searchQuery: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.searchQuery === '') return;

        console.log(this.state.searchQuery);

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

export default SearchBar;
