import './App.css';
import {useState, useEffect}  from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import SearchBar from './Components/SearchBar';
import PlaylistPage from './Components/PlaylistPage';
import RandomGen from './Components/RandomGen';

//ApiBaseUrl = "https://api.spotify.com/v1";

function App() {
  const [apiKey, setApiKey] = useState("");
  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([]);

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

  function updateTracks(tracks) {
    setTracks(tracks);
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



  //TODO refactor from playlist display
  function removeFromPlaylist(track) {
    console.log(track.id);
  }

  function addToPlaylist(track) {
    setPlaylist(playlist => [...playlist, track]);
  }

  const [page, setPage] = useState("/")

  return (
    <div className="App">

      <NavBar onChangePage={setPage}/>
      <Routes>
          <Route path='/searchbar' element={<SearchBar />}></Route>
          <Route path='/createplaylist' element={<PlaylistPage playlist={playlist}/>}></Route>
          <Route path='/randomgenerator' element={<RandomGen 
          tracks={tracks}
          updateTracks={updateTracks}
          getID={addToPlaylist}
          bearerToken={bearerToken}
          />}></Route>
          <Route path='/' element={<Home />}></Route>
      </Routes>

    </div>
  );
}

export default App;
