import React, {useEffect} from 'react'
import SearchItem from "./SearchItem";

export default function SearchResults({results}) {

    useEffect(() => {
        console.log(results)
    }, [results]);

    return (
        <div>
            {results.map(result => (
                <SearchItem key={result.id} result={result}/>
            ))}
        </div>
    )

    // return this.props.results.map(result => (
    //     <SearchItem key={result.id} result={result}/>
    // ));
}

// class SearchResults extends Component {
//
//     render() {
//         return this.props.results.map(result => (
//             <SearchItem key={result.id} result={result}/>
//         ));
//     }
// }
//
// export default SearchResults;
