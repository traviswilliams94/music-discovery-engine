import React from "react";

function Home(){
    //console.log("Home")
    return(
        <div>
        <p>You are on the home page</p>
        <div className="aboutus">
            <h2>About Us</h2>
        </div>
        <div className="legal">
            <h2>Built using the Spotify Web API</h2>
            <img src={"https://developer.spotify.com/images/guidelines/design/logo.png"}
            alt={"Spotify"}/>
        </div>
        </div>
    )
}






export default Home;