import React, {useState} from "react";
import TrackDisplay from './TrackDisplay';
import { generateRequestFromSeeds } from '../helperFunctions/helperFunctions';

function RandomGen({tracks, updateTracks, getID, bearerToken}) {
    //console.log("Random")
    const [genres, setGenres] = useState([]);
    const [genre, setGenre] = useState('');
    const randomGenreIndex = Math.floor(Math.random() * genres.length);

    function generateGenre(){
      fetch("something")
      .then(res => res.json)
      .then(setGenres)
      .then(setGenre(genres[randomGenreIndex])); 
}



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
            <button className="genrebutton" onClick={generateGenre} >Generate Genre</button>
            
            <h2>Genre: {genre}</h2>
            <div>
              <h2>Matching Tracks:</h2>
              <button className="tracksbutton" onClick={() => {getRandomTracks(genres)}}>Generate Tracks</button>
                <TrackDisplay tracks={tracks} getID={getID}/>
            </div>
            <img src={"https://developer.spotify.com/images/guidelines/design/logos.svg"}
            alt={"Spotify"}/>
        </div>
    )
}






export default RandomGen;