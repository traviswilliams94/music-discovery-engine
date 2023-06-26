import React from "react";
import TrackDisplay from "./TrackDisplay";

function SearchBar() {
    //console.log("Search")
    //TODO implement search **WILL BE A STRETCH GOAL TO DO THIS BY NAME**
    //non stretch version accepts Spotify IDs, which are impossible to read, but the api works
    //naturally with them. to do it by name we would have to handwrite a LOT of logic to convert
    //strings to a guess of what people want as a spotify ID
    //I'll talk about this when I explain what I understand about the API -RL
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
            <TrackDisplay />
        </div>
    )
}






export default SearchBar;