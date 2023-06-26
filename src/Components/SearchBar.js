import React from "react";
import TrackItem from "./TrackItem";

function SearchBar() {
    console.log("Search")
    return (
        <div>
            <p>You are on the Search Page</p>
            <label>Search genres, artists, or track titles: </label>
            <input
            type="text"
            name="search"
            placeholder="try it out!"
            />
            <button>Search</button>
            <TrackItem />
        </div>
    )
}






export default SearchBar;