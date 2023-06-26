import React from "react";
import TrackDisplay from './TrackDisplay';
import { generateRequestFromSeeds } from '../helperFunctions/helperFunctions';

function RandomGen({tracks, updateTracks, getID, bearerToken}) {
    //console.log("Random")
    const genres = "rock";//TODO unhardcode

    function getRandomTracks(genres) {
        const request = generateRequestFromSeeds(genres, "", "");
        fetch(request, {
          headers: {
            "Content-Type": "application/json",
            Authorization: bearerToken,
          },
        })
        .then(res => res.json())
        .then(data => {
          updateTracks(data.tracks);
        });
      }
    
    return (
        <div>
            <button onClick={() => {getRandomTracks(genres)}}>Get Random Tracks</button>
            <p>You are on the Generator Page</p>
            <h2>Genre: {genres}</h2>
                <div>
                    <h2>Matching Tracks:</h2>
                    <TrackDisplay tracks={tracks} getID={getID}/>
                </div>
        </div>
    )
}






export default RandomGen;