import './App.css';
import {useState, useEffect}  from 'react';
import Track from "./Track.js";
import { generateRequestFromSeeds } from './helperFunctions/helperFunctions';

function App() {
  const [apiKey, setApiKey] = useState("");
  const [tracks, setTracks] = useState([]);

  let bearerToken = `Bearer ${apiKey}`;

  //post request to get a authorization key valid for 1 hour
  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type" : "application/x-www-form-urlencoded"
      },
      body: `${process.env.REACT_APP_API_KEY}`
    })
    .then(res => res.json())
    .then(data => {
      const token = data.access_token;
      setApiKey(token);
      //console.log(token);
    })
  } , [])

  //test genre
  const genres = "classical";

  function getRandomTracks() {
    const request = generateRequestFromSeeds(genres, "", "");
    fetch(request, {
      headers: {
        "Content-Type": "application/json",
        Authorization: bearerToken,
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.tracks);
      setTracks(data.tracks);
    });
  }

  //template function for how to use the authentication
  function template() {
    fetch("https://api.spotify.com/v1/endpoint", {//replace endpoint
      headers: {
        "Content-Type": "application/json",
        Authorization: bearerToken,//will only work after useEffect async completes
      },
    })
    .then(res => res.json())
    .then()//do whatever
  }


  //TODO turn into maybe an "add to playlist" button
  function getID(track) {
    console.log(track.id);
  }
  
  //TODO the tracklist and other methods in here shouldn't be at the top level,
  //I just didn't want to do all the routing work today
  //let me know when you set up the routing(or when i do) and we can move things around
  return (
    <div className="Tracklist" id="Tracklist">
      <button onClick={getRandomTracks}>Get Random Tracks</button>
      {tracks ? 
      tracks.map(track => {
        return <Track 
        key={track.name} 
        track={track}
        getID={getID}/>
      })
      : <h1>Loading...</h1>
      }
    </div>
  );
}

export default App;
