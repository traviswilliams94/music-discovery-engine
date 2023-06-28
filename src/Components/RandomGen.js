import React, {useState} from "react";
import TrackDisplay from './TrackDisplay';
import { useRecoilState, useRecoilValue } from 'recoil';
import { apiKeyAtom, randomTracksAtom } from "../helperFunctions/atoms";
import { generateRequestFromSeeds } from '../helperFunctions/helperFunctions';

function RandomGen() {
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState('');
  const [tracks, setTracks] = useRecoilState(randomTracksAtom);
  const apiKey = useRecoilValue(apiKeyAtom);
  
  
  let bearerToken = `Bearer ${apiKey}`;
  
  function generateGenre(){
    const randomGenreIndex = Math.floor(Math.random() * genres.length);
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
    <div className="background">
      <p></p>
      <button id="genrebutton" className="randombutton" onClick={generateGenre} >Generate Genre</button>
      <h2>Genre: {genre}</h2>
      <div>
      <button id="trackbutton" className="randombutton" onClick={() => { getRandomTracks(genre) }}>Get Random {genre} Tracks</button>
        <h2>Matching Tracks:</h2>
        <TrackDisplay tracks={tracks} inPlaylist={false}/>
      </div>
      <div className="buffer">
      </div>
      <div className="ui medium image">
        <img src={"https://developer.spotify.com/images/guidelines/design/logo.png"}
          alt={"Spotify"}/>
      </div>
    </div>
  )
}

export default RandomGen;