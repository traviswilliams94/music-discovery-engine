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
      body: `${process.env.REACT_APP_API_KEY}`
    })
    .then(res => res.json())
    .then(data => {
      const token = data.access_token;
      setApiKey(token);
    })
  } , [])

  //template function for how to use the authentication
  function template() {
    fetch(`${ApiBaseUrl}/endpoint`, {//replace endpoint
      headers: {
        "Content-Type": "application/json",
        Authorization: bearerToken,//will only work after useEffect async completes
      },
    })
    .then(res => res.json())
    .then()//do whatever
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
