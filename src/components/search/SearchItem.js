import React, {Component} from 'react';
import PropTypes from "prop-types";

class SearchItem extends Component {

    render() {
        return (
            <p>{this.props.result.name}</p>
        )
    }
}

// PropTypes
SearchItem.propType = {
    result: PropTypes.object.isRequired,
};

export default SearchItem;