import React, {useState} from 'react';


export default function SearchBar({performSearch}) {
    const [query, setQuery] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        // Do nothing if search query is empty
        if (query === '') return;

        performSearch(query);

        setQuery('')
    }

    return (
        <form className="form-inline px-auto row" onSubmit={event => onSubmit(event)}>
            <input
                className="form-control mr-sm-2 col-10"
                type="search"
                placeholder="Search"
                name="searchQuery"
                value={query}
                onChange={event => setQuery(event.target.value) }/>
            <input
                className="btn btn-outline-success col-auto"
                type="submit"
                value="Search" />
        </form>
    )
}