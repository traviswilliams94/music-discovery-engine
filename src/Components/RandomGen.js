import React from "react";
import TrackDisplay from './TrackDisplay';
import { useRecoilState, useRecoilValue } from 'recoil';
import { apiKeyAtom, tracksAtom } from "../helperFunctions/atoms";
import { generateRequestFromSeeds } from '../helperFunctions/helperFunctions';

function RandomGen() {
  const [tracks, setTracks] = useRecoilState(tracksAtom);
  const apiKey = useRecoilValue(apiKeyAtom);
  let bearerToken = `Bearer ${apiKey}`;

  const genres = "rock,     classical";//TODO unhardcode

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
        setTracks(data.tracks);
      });
  }

  return (
    <div>
      <button onClick={() => { getRandomTracks(genres) }}>Get Random Tracks</button>
      <p>You are on the Generator Page</p>
      <h2>Genre: {genres}</h2>
      <div>
        <h2>Matching Tracks:</h2>
        <TrackDisplay tracks={tracks} inPlaylist={false}/>
      </div>
      <img src={"https://developer.spotify.com/images/guidelines/design/logo.png"}
        alt={"Spotify"} />
    </div>
  )
}

export default RandomGen;