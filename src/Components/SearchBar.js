import React, { useState } from "react";
import { useRecoilValue } from 'recoil';
import { apiKeyAtom } from "../helperFunctions/atoms";
import TrackDisplay from "./TrackDisplay";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const apiKey = useRecoilValue(apiKeyAtom);
    let bearerToken = `Bearer ${apiKey}`;
    
    function handleChange(e) {
        setSearchTerm(e.target.value);
    }

    function search() {
        const request = `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`
        fetch(request, {
            headers: {
              "Content-Type": "application/json",
              Authorization: bearerToken,
            },
          })
        .then(res => res.json())
        .then(console.log);//returns list of artists that relate to search term (20)
        //TODO decide what we want to turn that into, we can grab the spotify IDs from them this way
    }

    return (
        <div>
            <div className="background">
            <p></p>
            <label>Search artists: </label>
            <input onChange={handleChange}
            type="text"
            name="search"
            value={searchTerm}
            />
            <button onClick={search}>Search</button>
            <TrackDisplay />
            <img src={"https://developer.spotify.com/images/guidelines/design/logo.png"}
            alt={"Spotify"}/>
            </div>
        </div>
    )
}

export default SearchBar;