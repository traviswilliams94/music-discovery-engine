import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import { apiKeyAtom, searchTracksAtom } from "../helperFunctions/atoms";
import TrackDisplay from "./TrackDisplay";

export default function SearchTracks() {
    const [searchTerm, setSearchTerm] = useState("");
    const [tracks, setSearchTracks] = useRecoilState(searchTracksAtom);
    const apiKey = useRecoilValue(apiKeyAtom);
    let bearerToken = `Bearer ${apiKey}`;
    
    function handleChange(e) {
        setSearchTerm(e.target.value);
    }

    function search() {
        const request = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`
        fetch(request, {
            headers: {
              "Content-Type": "application/json",
              Authorization: bearerToken,
            },
          })
        .then(res => res.json())
        .then(data => {
          setSearchTracks(data.tracks.items);
        });
    }

    return (
        <div>
            <div className="background">
            <p></p>
            <label>Search tracks: </label>
            <input onChange={handleChange}
            type="text"
            name="search"
            value={searchTerm}
            />
            <button onClick={search}>Search</button>
            <TrackDisplay tracks={tracks} inPlaylist={false}/>
            <img src={"https://developer.spotify.com/images/guidelines/design/logo.png"}
            alt={"Spotify"}/>
            </div>
        </div>
    )
}