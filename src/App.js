import './App.css';
import {useState, useEffect}  from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { apiKeyAtom } from './helperFunctions/atoms';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import SearchArtists from './Components/SearchArtists';
import SearchTracks from './Components/SearchTracks';
import PlaylistPage from './Components/PlaylistPage';
import RandomGen from './Components/RandomGen';

//ApiBaseUrl = "https://api.spotify.com/v1";

function App() {

  const [apiKey, setApiKey] = useRecoilState(apiKeyAtom);
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
    })
  } , [])

  const [page, setPage] = useState("/")

  return (
    <div className="App">

      <NavBar onChangePage={setPage}/>
      <Routes>
          <Route path='/searchArtists' element={<SearchArtists />}></Route>
          <Route path='/searchTracks' element={<SearchTracks />}></Route>
          <Route path='/createplaylist' element={<PlaylistPage playlist={playlist}/>}></Route>
          <Route path='/randomgenerator' element={<RandomGen />}></Route>
          <Route path='/' element={<Home />}></Route>
      </Routes>

    </div>
  );
}

export default App;
