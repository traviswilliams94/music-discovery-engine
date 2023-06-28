import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { apiKeyAtom, artistsAtom } from "../helperFunctions/atoms";
import ArtistDisplay from "./ArtistDisplay";

export default function SearchArtists() {
    const [searchTerm, setSearchTerm] = useState("");
    const setArtists = useSetRecoilState(artistsAtom);
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
        <div className="background">
            <div className="ui header">
                <div className="searchbar">
                    <br />
                <label>Search artists: </label>
                <input onChange={handleChange}
                    type="text"
                    name="search"
                    value={searchTerm}
                />
                <button onClick={search}>Search</button>
                </div>
            </div>
            <div className="buffer">
            </div>
            <ArtistDisplay />
            <div className="buffer">
            </div>
            <div className="ui medium image">
                <img src={"https://developer.spotify.com/images/guidelines/design/logo.png"}
                    alt={"Spotify"} />
            </div>
        </div>
    )
}