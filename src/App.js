import logo from './logo.svg';
import './App.css';
import {useState, useEffect}  from 'react';

const ApiBaseUrl = "https://api.spotify.com/v1";


function App() {
  const [apiKey, setApiKey] = useState("");

  let bearerToken = `Bearer ${apiKey}`;

  //post request to get a authorization key valid for 1 hour
  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type" : "application/x-www-form-urlencoded"
      },
      body: "grant_type=client_credentials&client_id=2c092ae6773d4bbfb315299881de041a&client_secret=78f58078f91d43bf906fc8fc1e915c76"
    })
    .then(res => res.json())
    .then(data => {
      const token = data.access_token;
      setApiKey(token);
    })
  }, [])

  //template function for how to use the authentication
  function testGetGenreSeeds() {
    fetch(`${ApiBaseUrl}/recommendations/available-genre-seeds`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: bearerToken,
      },
    })
    .then(res => res.json())
    .then(console.log)
  }

  //testGetGenreSeeds();
  
  return (
    <div className="App">
      <div>
        <h1></h1>
      </div>
    </div>
  );
}

export default App;
