import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
const Search = () => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        console.log(`Search query: ${query}`);
    };

    return (
        <div className="search_container">
            <IoSearch onClick={handleSearch} style={{position: 'absolute',top:'50%',left:'1150px', transform: 'translateY(-50%)', cursor: 'pointer' , height:'50%' , width:'auto'}}/>
            <input className = "search_field"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='search for plant here...'
            />
        </div>
    );
}

export default Search;
