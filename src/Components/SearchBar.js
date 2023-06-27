import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import { apiKeyAtom, artistsAtom } from "../helperFunctions/atoms";
import ArtistDisplay from "./ArtistDisplay";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [artists, setArtists] = useRecoilState(artistsAtom);
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
        .then(data => {
            setArtists(data.artists.items);
        });
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
            <ArtistDisplay />
            <img src={"https://developer.spotify.com/images/guidelines/design/logo.png"}
            alt={"Spotify"}/>
            </div>
        </div>
    )
}

export default SearchBar;