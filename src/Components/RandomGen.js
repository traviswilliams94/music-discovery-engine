import React, {useState} from "react";
import TrackDisplay from './TrackDisplay';
import { useRecoilState, useRecoilValue } from 'recoil';
import { apiKeyAtom, tracksAtom } from "../helperFunctions/atoms";
import { generateRequestFromSeeds } from '../helperFunctions/helperFunctions';


function RandomGen({getID}) {
    
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState('');
  const [tracks, setTracks] = useRecoilState(tracksAtom);
  const apiKey = useRecoilValue(apiKeyAtom);
  let bearerToken = `Bearer ${apiKey}`;
  const randomGenreIndex = Math.floor(Math.random() * genres.length);

    function generateGenre(){
      fetch("http://localhost:3001/genres")
      .then(res => res.json())
      .then(setGenres)
      .then(setGenre(genres[randomGenreIndex])); 
}



    function getRandomTracks(genre) {
        const request = generateRequestFromSeeds(genre, "", "");
        fetch(request, {
          headers: {
            "Content-Type": "application/json",
            Authorization: bearerToken,
          },
        })
        .then(res => res.json())
        .then(data => {
          setTracks(data.tracks);
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